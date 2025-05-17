import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiTensorflow, SiNumpy, SiMysql,
  SiOpencv, SiMicrosoftazure, SiApachekafka, SiFlutter
} from 'react-icons/si';

export default function Technologies() {
  const techStack = [
    { icon: <FaReact size={50} />, label: 'React', color: 'text-blue-500' },
    { icon: <SiTailwindcss size={50} />, label: 'Tailwind CSS', color: 'text-teal-500' },
    { icon: <FaNodeJs size={50} />, label: 'Node.js', color: 'text-green-600' },
    { icon: <SiMongodb size={50} />, label: 'MongoDB', color: 'text-green-700' },
    { icon: <SiMysql size={50} />, label: 'MySQL', color: 'text-blue-700' },
    { icon: <FaPython size={50} />, label: 'Python', color: 'text-yellow-500' },
    { icon: <SiTensorflow size={50} />, label: 'TensorFlow', color: 'text-orange-500' },
    { icon: <SiOpencv size={50} />, label: 'OpenCV', color: 'text-indigo-600' },
    { icon: <SiApachekafka size={50} />, label: 'Kafka', color: 'text-purple-700' },
    { icon: <SiFlutter size={50} />, label: 'Flutter', color: 'text-cyan-600' },
  ];

  return (
    <section className="container mx-auto pt-40 px-4">
      {/* Custom float animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>

      <div className="flex flex-col w-full text-center">
        <h1 className="text-2xl font-semibold text-blue-600 mb-12">
          Technologies and Frameworks I Work With
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 text-center">
        {techStack.map((tech, index) => {
          const delay = `${index * 0.3}s`; // staggered delay
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
              aria-label={tech.label}
              title={tech.label}
              style={{
                animation: `float 6s ease-in-out infinite`,
                animationDelay: delay,
              }}
            >
              <div className={tech.color}>{tech.icon}</div>
              {/* Optional label below each icon */}
            </div>
          );
        })}
      </div>
    </section>
  );
}
