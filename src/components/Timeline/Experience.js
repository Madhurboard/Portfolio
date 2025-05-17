import { Briefcase } from "react-feather";
import { TimelineEntry, Notes } from "./Entry";

export function Experience() {
  return (
    <>
       <TimelineEntry title="Data Engineer Intern - Bajaj Finserv Health Ltd" timestamp="Jul 2025 – Present" Icon={Briefcase} tint="blue">
        <Notes>
          <p>Building scalable data pipelines to support healthcare analytics and operational dashboards. Working on ingestion of real-time and batch data from various sources into cloud-based data warehouses.</p>
          <p>Developed dashboards and reports to monitor key health and service metrics using Power BI.</p>
          <p><strong>Key Skills:</strong> Power BI, MySQL, Azure SQL Database, Python</p>
        </Notes>
      </TimelineEntry>

      <TimelineEntry title="AI Research and Development Intern - Attain Studios" timestamp="Feb 2025 – Jul 2025" Icon={Briefcase} tint="black">
        <Notes>
          <p>Implementing modules for real-time video monitoring, face detection, and automated behavior flagging using computer vision and machine learning.</p>
          <p><strong>Key Skills:</strong> MediaPipe FaceMesh, OpenCV, Dlib, YOLOv8, Haar Cascades</p>
        </Notes>
      </TimelineEntry>

      <TimelineEntry title="AI Research and Development Intern - IS360 Technologies" timestamp="Jul 2024 – Dec 2024" Icon={Briefcase} tint="yellow">
        <Notes>
          <p>Developed a machine learning pipeline using Linear Discriminant Analysis (LDA) to classify EEG signals from the Auditory Oddball paradigm, detecting event-related potentials like the P300 wave.</p>
          <p><strong>Key Skills:</strong> Machine Learning, LDA</p>
        </Notes>
      </TimelineEntry>
    </>
  );
}
