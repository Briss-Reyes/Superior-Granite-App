import { FC } from "react";
import { FaTools } from "react-icons/fa"; // Example icon

const UnderDevelopment: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <FaTools className="text-9xl text-accent mb-4" />
      <h1 className="text-2xl font-semibold text-gbody">
        Page Under Development
      </h1>
    </div>
  );
};

export default UnderDevelopment;








// import Link from "next/link";
// import { getProjects } from "../../../../sanity/sanity-utils";
// import Image from "next/image";

// export default async function Projects() {
//   const projects = await getProjects();
//   return (
//     <div className="max-w-5xl mx-auto px-2 py-20">
//       <h1 className="text-7xl font-extrabold">Just a test <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">text!</span></h1>

//       <p className="mt-3 text-xl text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident.</p>

//       <h2 className="mt-24 font-bold text-gray-700 text-3xl">Sanity Data</h2>

//       <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {projects.map((project) => (
//         <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition-all duration-200">
//           {project.image && (
//             <Image src={project.image} alt={project.name} width={750} height={300} className="object-cover rounded-lg border-gray-500" />
//           )}
//           <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">{project.name}</div> 
//         </Link>
//       ))}
//       </div>
//     </div>
//   );  
// }
