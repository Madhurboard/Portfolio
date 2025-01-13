import { Experience } from "./Experience";
import { Education } from "./Education";         
import { Projects } from "./Projects";           
import { DateEntry } from './Entry'; 

export default function Timeline() {
  return (
    <section className="relative flex flex-col w-full max-w-xl mx-auto timeline pt-4 md:pt-0">
      <DateEntry title="Projects" /> 
      <Projects />
      
      <DateEntry title="Experience" /> 
      <Experience /> 
      
      <DateEntry title="Education" /> 
      <Education /> 
      
      
      
      <div className="absolute left-0 right-0 h-full pointer-events-none">
        <svg className="sticky top-0" preserveAspectRatio="none" viewBox="0 0 10 30" width="100%" height="75">
          <defs>
            <linearGradient id="eased-gradient-gradient-standard-layout" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <mask id="eased-gradient-mask-standard-layout">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#eased-gradient-gradient-standard-layout)" />
          </mask>
          <rect x="0" y="0" width="100%" height="100%" mask="url(#eased-gradient-mask-standard-layout)" fill="#fff" />
        </svg>
      </div>
    </section>
  );
}
