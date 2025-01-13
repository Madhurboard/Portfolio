import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa'; 
import { SiTailwindcss, SiMongodb, SiNumpy, SiJupyter, SiTensorflow, SiCplusplus } from 'react-icons/si';

export default function Technologies() {
  return (
    <section className="container pt-40 mx-auto">
      <div className="flex flex-col w-full text-left lg:text-center">
        <h1 className="text-2xl font-semibold text-blue-550 title-font">
          Technologies and Frameworks I work with.
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-16 my-16 text-center sm:md:grid-cols-3 md:grid-cols-3">
        <div className="flex items-center justify-center">
          <FaReact size={50} className="text-blue-500" />
        </div>
        <div className="flex items-center justify-center">
          <SiTailwindcss size={50} className="text-teal-500" />
        </div>
        <div className="flex items-center justify-center">
          <SiMongodb size={50} className="text-green-600" />
        </div>
        <div className="flex items-center justify-center">
          <FaNodeJs size={50} className="text-green-500" />
        </div>
        <div className="flex items-center justify-center">
          <FaPython size={50} className="text-yellow-500" />
        </div>
        <div className="flex items-center justify-center">
          <SiTensorflow size={50} className="text-orange-500" />
        </div>
        <div className="flex items-center justify-center">
          <SiNumpy size={50} className="text-blue-800" />
        </div>
        <div className="flex items-center justify-center">
          <SiJupyter size={50} className="text-orange-700" />
        </div>
        <div className="flex items-center justify-center">
          <SiCplusplus size={50} className="text-blue-600" />
        </div>
      </div>
    </section>
  );
}
