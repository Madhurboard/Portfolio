import { Experience } from "./Experience"; // Correct path
import { Education } from "./Education";           // Correct path
import { Projects } from "./Projects";             // Correct path

import { DateEntry } from './Entry'; // Import DateEntry component

export default function Timeline() {
  return (
    <section className="relative flex flex-col w-full max-w-xl mx-auto timeline pt-4 md:pt-0">
      <DateEntry title="Projects" /> {/* Projects Header */}
      <Projects /> {/* Project entries */}
      
      <DateEntry title="Experience" /> {/* Experience Header */}
      <Experience /> {/* Experience entries for 2024, 2023, etc. */}
      
      <DateEntry title="Education" /> {/* Education Header */}
      <Education /> {/* Education entries */}
      
      
      
      <div className="absolute left-0 right-0 h-full pointer-events-none">
        <svg className="sticky top-0" preserveAspectRatio="none" viewBox="0 0 10 30" width="100%" height="75">
          <defs>
            <linearGradient id="eased-gradient-gradient-standard-layout" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 1 }} />
              {/* More gradient stops */}
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
