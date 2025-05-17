import { Book } from "react-feather";
import { TimelineEntry, Notes } from "./Entry";

export function Education() {
  return (
    <>
      <TimelineEntry title="Bachelor of Technology, MIT ADT - School of Computing" timestamp="2022 - Present" Icon={Book} tint="purple">
        <Notes>
          <p>Pursuing a B.Tech in Computing with a CGPA of 8.71 (Fifth Semester).</p>
        </Notes>
      </TimelineEntry>

      <TimelineEntry title="SPI - Services Preparatory Institute Integrated College" timestamp="2022" Icon={Book} tint="yellow">
        <Notes>
          <p>Percentage: 68.83%</p>
        </Notes>
      </TimelineEntry>

      <TimelineEntry title="10th - Shri N.T. Mundada Global View School" timestamp="2020" Icon={Book} tint="blue">
        <Notes>
          <p>Percentage: 96.60%</p>
        </Notes>
      </TimelineEntry>
    </>
  );
}
