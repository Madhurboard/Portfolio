import { Code } from "react-feather";
import { TimelineEntry, Notes, ButtonSet } from "./Entry";

export function Projects() {
  return (
    <>

      <TimelineEntry title="AlgoViz – Interactive Algorithm Visualizer" timestamp="2025" Icon={Code} tint="blue">
  <Notes>
    <p>Developed AlgoViz for the Lovable AI Showdown Hackathon – a visual and intuitive algorithm learning tool powered by Google Gemini. Features sorting, pathfinding, recursion, graphs, ML, and more.</p>
  </Notes>
  <ButtonSet>
    <a className="btn" href="https://github.com/Madhurboard/AlgoViz" target="_blank" rel="noopener noreferrer">
      View on GitHub
    </a>
    <a className="btn w-50 text-center" href="https://algoviz.madhurpatil.me" target="_blank" rel="noopener noreferrer">
      Visit Live Website
    </a>
  </ButtonSet>
</TimelineEntry>

      <TimelineEntry title="SickleSense - Sickle Cell Detection Platform" timestamp="2025" Icon={Code} tint="green">
        <Notes>
          <p>Created a project using OpenCV and Machine Learning to identify sickle cells in blood samples, aiding early diagnosis of Sickle Cell Anemia.</p>
        </Notes>
        <ButtonSet>
          <a className="btn" href="https://github.com/Madhurboard/sickle-cell-identifier" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
          <a className="btn w-50 text-center" href="https://sicklesense-ten.vercel.app" target="_blank" rel="noopener noreferrer">
              Visit Live Website
            </a>
        </ButtonSet>
      </TimelineEntry>

      <TimelineEntry title="Kisaan Sahayak - Smart Agriculture Platform" timestamp="2025" Icon={Code} tint="blue">
        <Notes>
          <p>Designed a full-stack platform for farmers with crop price prediction, crop recommendation, government schemes, community forums, and weather updates.</p>
        </Notes>
        <ButtonSet>
          <div className="flex space-x-4">
            <a className="btn" href="https://github.com/Madhurboard/kisan-sahayak-platform" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
            <a className="btn w-50 text-center" href="https://kisaan.madhurpatil.me" target="_blank" rel="noopener noreferrer">
              Visit Live Website
            </a>
          </div>
        </ButtonSet>
      </TimelineEntry>

      <TimelineEntry title="BidX - Real-Time Bidding Application" timestamp="2025" Icon={Code} tint="red">
        <Notes>
          <p>Real-time bidding platform enabling users to create and participate in live auctions with dynamic bid tracking and authentication.</p>
        </Notes>
        <ButtonSet>
          <div className="flex space-x-4">
            <a className="btn" href="https://github.com/Madhurboard/BidX" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
            <a className="btn w-50 text-center" href="https://bidx-sigma.vercel.app/" target="_blank" rel="noopener noreferrer">
              Visit Live Website
            </a>
          </div>
        </ButtonSet>
      </TimelineEntry>

      <TimelineEntry title="CoordinatorsApp - Placement Cell Management" timestamp="2024" Icon={Code} tint="teal">
        <Notes>
          <p>Android app for managing college placement activities, company coordination, student status, and placement tracking.</p>
        </Notes>
        <ButtonSet>
          <div className="flex space-x-4">
            <a className="btn" href="https://github.com/Madhurboard/Coordinatorsapp" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
            <a className="btn" href="https://drive.google.com/file/d/18NxfYm2ZY45OrfwSMpG2J3V8fwBtuC_Z/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Download APK
            </a>
          </div>
        </ButtonSet>
      </TimelineEntry>

      <TimelineEntry title="GeeksforGeeks MIT ADT Chapter Website" timestamp="2024" Icon={Code} tint="purple">
        <Notes>
          <p>Official website for GFG MIT ADT Chapter to share events, blogs, member profiles, and more. Mobile-friendly and SEO-optimized.</p>
        </Notes>
        <ButtonSet>
          <div className="flex space-x-4">
            <a className="btn" href="https://github.com/Madhurboard/GFG-WEBSITE" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
            <a className="btn w-50 text-center" href="https://www.gfgmitadt.in/" target="_blank" rel="noopener noreferrer">
              Visit Live Website
            </a>
          </div>
        </ButtonSet>
      </TimelineEntry>

      <TimelineEntry title="Snappy - Real-Time Chat App" timestamp="2024" Icon={Code} tint="orange">
        <Notes>
          <p>Developed a chat app using React, Node.js, and Socket.IO with real-time communication, user authentication, and responsive design.</p>
        </Notes>
        <ButtonSet>
          <div className="flex space-x-4">
            <a className="btn" href="https://github.com/Madhurboard/snappy" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
            <a className="btn w-50 text-center" href="https://snappy.madhurpatil.me" target="_blank" rel="noopener noreferrer">
              Visit Live Website
            </a>
          </div>
        </ButtonSet>
      </TimelineEntry>

      <TimelineEntry title="AI Math Notes App" timestamp="2024" Icon={Code} tint="yellow">
        <Notes>
          <p>Created an AI-powered notes tool that helps students summarize and organize math content using the Google Gemini API.</p>
        </Notes>
        <ButtonSet>
          <div className="flex space-x-4">
            <a className="btn" href="https://github.com/Madhurboard/Math-notes" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
            <a className="btn" href="https://mathnotes.madhurpatil.me" target="_blank" rel="noopener noreferrer">
              Visit Live Website
            </a>
          </div>
        </ButtonSet>
      </TimelineEntry>

      <TimelineEntry title="Portfolio Website" timestamp="2023" Icon={Code} tint="gray">
        <Notes>
          <p>Fully responsive personal portfolio to showcase skills, experience, and projects. Built with React, Tailwind CSS, and deployed on Netlify.</p>
        </Notes>
        <ButtonSet>
          <a className="btn" href="https://github.com/Madhurboard/my-portfolio" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
          <a className="btn" href="https://madhurpatil.me" target="_blank" rel="noopener noreferrer">
              Visit Live Website
            </a>
        </ButtonSet>
      </TimelineEntry>

      <TimelineEntry title="EEG Based Emotion Prediction" timestamp="2023" Icon={Code} tint="pink">
        <Notes>
          <p>Machine learning model built with Python and TensorFlow to classify emotions using EEG signals with 86% accuracy.</p>
        </Notes>
        <ButtonSet>
          <a className="btn" href="https://github.com/Madhurboard/EEG-Emotion-Prediction" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </ButtonSet>
      </TimelineEntry>

      <TimelineEntry title="Driver Drowsiness Detection System" timestamp="2023" Icon={Code} tint="indigo">
        <Notes>
          <p>Real-time drowsiness detection system using facial recognition and eye-tracking algorithms. Achieved 89% accuracy using OpenCV and Python.</p>
        </Notes>
        <ButtonSet>
          <a className="btn" href="https://github.com/Madhurboard/DDDS" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </ButtonSet>
      </TimelineEntry>
    </>
  );
}
