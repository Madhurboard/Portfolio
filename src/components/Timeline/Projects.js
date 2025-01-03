import { Code } from "react-feather";
import { TimelineEntry, Notes, ButtonSet } from "./Entry";

export function Projects() {
  return (
    <>
      <TimelineEntry title="Snappy - A Real-Time Chat Website" timestamp="2024" Icon={Code} tint="orange">
        <Notes>
          <p>Developed a real-time chat application using React, Node.js, and Socket.IO, featuring secure user authentication and seamless messaging.</p>
        </Notes>
        <ButtonSet>
        <div className="flex space-x-4">

          <a
            className="btn"
            href="https://github.com/Madhurboard/snappy"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <a
            className="btn w-50 text-center"
            href="https://snappy.madhurpatil.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Live Website
          </a>
        </div>
        </ButtonSet>
      </TimelineEntry>

      <TimelineEntry title="AI Math Notes App" timestamp="2023" Icon={Code} tint="yellow">
        <Notes>
          <p>Developed an AI-driven application that helps users take and organize math notes using Google Gemini API.</p>
        </Notes>
        <ButtonSet>
        <div className="flex space-x-4">
          <a
            className="btn w-50 text-center"
            href="https://github.com/Madhurboard/Math-notes"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <a
            className="btn w-50 text-center"
            href="https://mathnotes.madhurpatil.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Live Website
          </a>
        </div>

        </ButtonSet>
      </TimelineEntry>

      <TimelineEntry title="Portfolio Website" timestamp="2024" Icon={Code} tint="purple">
        <Notes>
          <p>Built a fully responsive personal portfolio website using HTML, CSS, JavaScript, and React.</p>
        </Notes>
        <ButtonSet>
          <a
            className="btn"
            href="https://github.com/Madhurboard/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </ButtonSet>
      </TimelineEntry>

      <TimelineEntry title="EEG Based Emotion Prediction" timestamp="2024" Icon={Code} tint="green">
        <Notes>
          <p>Developed a machine learning model with 86% accuracy to predict emotions based on EEG signals using Python and TensorFlow.</p>
        </Notes>
        <ButtonSet>
          <a
            className="btn"
            href="https://github.com/Madhurboard/EEG-Emotion-Prediction"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </ButtonSet>
      </TimelineEntry>

      <TimelineEntry title="Sickle Cell Detection Using OpenCV" timestamp="2024" Icon={Code} tint="blue">
        <Notes>
          <p>Created a project using OpenCV and Machine Learning to identify sickle cells in blood samples.</p>
        </Notes>
        <ButtonSet>
          <a
            className="btn"
            href="https://github.com/Madhurboard/sickle-cell-identifier"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </ButtonSet>
      </TimelineEntry>

      <TimelineEntry title="Driver Drowsiness Detection System" timestamp="2023" Icon={Code} tint="indigo">
        <Notes>
          <p>Implemented a real-time driver drowsiness detection system using facial recognition and eye-tracking algorithms, achieving 89% accuracy.</p>
        </Notes>
        <ButtonSet>
          <a
            className="btn"
            href="https://github.com/Madhurboard/DDDS"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </ButtonSet>
      </TimelineEntry>
    </>
  );
}
