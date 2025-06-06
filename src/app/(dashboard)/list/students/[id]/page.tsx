// import { StudentService } from "@/api/models/student/students.api";
// import BigCalendar from "@/components/customs/BigCalendar";
// import Performance from "@/components/customs/Performance";
// import Image from "next/image";
// import Link from "next/link";

// interface PageProps {
//   params: Promise<{
//     id: string
//   }>
// }

const SingleStudentPage = async () => {
//   const { id } = await params;
//   console.log(id)

//   const studentData = await StudentService.getStudentById(id);

//   return (
//     <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
//       {/* LEFT */}
//       <div className="w-full xl:w-2/3">
//         {/* TOP */}
//         <div className="flex flex-col lg:flex-row gap-4">
//           {/* USER INFO CARD */}
//           <div className="bg-userSky py-6 px-4 rounded-md flex-1 flex gap-4">
//             <div className="w-1/3">
//               <Image
//                 src={studentData?.image || "/user.png"}
//                 alt={studentData?.firstName}
//                 width={144}
//                 height={144}
//                 className="w-36 h-36 rounded-full object-cover"
//               />
//             </div>
//             <div className="w-2/3 flex flex-col justify-between gap-4">
//               <h1 className="text-xl font-semibold">{studentData.firstName} {studentData.lastName}</h1>
//               <p className="text-sm text-gray-500">
//                 {studentData?.email}
//               </p>
//               <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                
//                 <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
//                   <Image src="/date.png" alt="" width={14} height={14} />
//                   <span>{studentData?.birthday}</span>
//                 </div>
//                 <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
//                   <Image src="/mail.png" alt="" width={14} height={14} />
//                   <span>{studentData.email}</span>
//                 </div>
//                 <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
//                   <Image src="/phone.png" alt="" width={14} height={14} />
//                   <span>{studentData.phone}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* SMALL CARDS */}
//           <div className="flex-1 flex gap-4 justify-between flex-wrap">
//             {/* CARD */}
//             <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
//               <Image
//                 src="/singleAttendance.png"
//                 alt=""
//                 width={24}
//                 height={24}
//                 className="w-6 h-6"
//               />
//               <div className="">
//                 <h1 className="text-xl font-semibold">90%</h1>
//                 <span className="text-sm text-gray-400">Asistencia</span>
//               </div>
//             </div>
//             {/* CARD */}
//             <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
//               <Image
//                 src="/singleBranch.png"
//                 alt=""
//                 width={24}
//                 height={24}
//                 className="w-6 h-6"
//               />
//               <div className="">
//                 <h1 className="text-xl font-semibold">A</h1>
//                 <span className="text-sm text-gray-400">Area</span>
//               </div>
//             </div>
//             {/* CARD */}
//             <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
//               <Image
//                 src="/singleLesson.png"
//                 alt=""
//                 width={24}
//                 height={24}
//                 className="w-6 h-6"
//               />
//               <div className="">
//                 <h1 className="text-xl font-semibold">18</h1>
//                 <span className="text-sm text-gray-400">Lessons</span>
//               </div>
//             </div>
//             {/* CARD */}
//             <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
//               <Image
//                 src="/singleClass.png"
//                 alt=""
//                 width={24}
//                 height={24}
//                 className="w-6 h-6"
//               />
//               <div className="">
//                 <h1 className="text-xl font-semibold">Enfermeria</h1>
//                 <span className="text-sm text-gray-400">Class</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* BOTTOM */}
//         <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
//           <h1>Programación de Alumnos</h1>
//           <BigCalendar />
//         </div>
//       </div>
//       {/* RIGHT */}
//       <div className="w-full xl:w-1/3 flex flex-col gap-4">
//         <div className="bg-white p-4 rounded-md">
//           <h1 className="text-xl font-semibold">Shortcuts</h1>
//           <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
//             <Link className="p-3 rounded-md bg-userSkyLight" href="/">
//               Student&apos;s Lessons
//             </Link>
//             <Link className="p-3 rounded-md bg-userPurpleLight" href="/">
//               Student&apos;s Teachers
//             </Link>
//             <Link className="p-3 rounded-md bg-pink-50" href="/">
//               Student&apos;s Exams
//             </Link>
//             <Link className="p-3 rounded-md bg-userSkyLight" href="/">
//               Student&apos;s Assignments
//             </Link>
//             <Link className="p-3 rounded-md bg-userYellowLight" href="/">
//               Student&apos;s Results
//             </Link>
//           </div>
//         </div>
//         <Performance />
//         {/* <Announcements /> */}
//       </div>
//     </div>
//   );
};

export default SingleStudentPage;