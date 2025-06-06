const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const ITEMS_PER_PAGE = 5; // Número de elementos por página para paginación

export interface MetaData {
  lastPage: number;
  page: number;
  total: number;
}

interface FetchOptions<TBody = unknown> {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: TBody;
  headers?: Record<string, string>;
  cache?: RequestCache;
  next?: {
    revalidate?: number;
    tags?: string[];
  };
  signal?: AbortSignal;
}

interface ErrorResponse {
  message: string;
  [key: string]: unknown;
}

export class ApiError extends Error {
  constructor(
    public message: string,
    public status: number,
    public details?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

const DEFAULT_TIMEOUT = 10000;

/**
 * Wrapper seguro y escalable para fetch API
 * @param endpoint Ruta del API (sin el dominio base)
 * @param options Opciones de la petición
 * @returns Promise con los datos de la respuesta
 * @throws ApiError cuando la respuesta no es exitosa
 */
export async function fetchWrapper<TResponse = void, TBody = unknown>(
  endpoint: string,
  options: FetchOptions<TBody> = {}
): Promise<TResponse> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT);

  try {
    const { method = 'GET', body, headers = {}, ...restOptions } = options;

    const response = await fetch(`${API_URL}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
      ...restOptions,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const error = await parseErrorResponse(response);
      throw error;
    }

    return parseSuccessResponse<TResponse>(response);
  } catch (error) {
    clearTimeout(timeoutId);
    handleFetchError(error);
    throw error; // Este throw es para TypeScript, en realidad handleFetchError ya lanza el error
  }
}

// Helper para parsear respuestas de error
async function parseErrorResponse(response: Response): Promise<ApiError> {
  try {
    const errorData = (await response.json().catch(() => ({}))) as ErrorResponse;
    return new ApiError(
      errorData.message || response.statusText,
      response.status,
      errorData
    );
  } catch (e) {
    console.error('Error parsing error response:', e);
    return new ApiError(response.statusText, response.status);
  }
}

// Helper para parsear respuestas exitosas
async function parseSuccessResponse<T>(response: Response): Promise<T> {
  try {
    // Para respuestas sin contenido (como 204 No Content)
    if (response.status === 204) {
      return undefined as unknown as T;
    }
    return (await response.json()) as T;
  } catch (e) {
    console.error('Error parsing successful response:', e);
    return undefined as unknown as T;
  }
}

// Manejador centralizado de errores
function handleFetchError(error: unknown): never {
  if (error instanceof ApiError) {
    throw error;
  }

  if (error instanceof Error && error.name === 'AbortError') {
    throw new ApiError('Request timeout', 408);
  }

  throw new ApiError(
    error instanceof Error ? error.message : 'Unknown fetch error',
    500
  );
}

export default fetchWrapper;