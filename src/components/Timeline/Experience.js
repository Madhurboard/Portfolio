import { Briefcase } from "react-feather";
import { TimelineEntry, Notes } from "./Entry"; // Import the components

export function Experience() {
  return (
    <>
      <TimelineEntry title="President - GeeksforGeeks Student Chapter" timestamp="June 2024 - Present" Icon={Briefcase} tint="indigo">
        <Notes>
          <p>Leading a team of 40, organizing workshops and hackathons, mentoring students.</p>
          <p>Coordinated with industry professionals to conduct technical sessions on trending technologies.</p>
        </Notes>
      </TimelineEntry>
      
      <TimelineEntry title="Technical Associate - CodeChef MITSOC" timestamp="July 2023 - June 2024" Icon={Briefcase} tint="green">
        <Notes>
          <p>Organized 4 coding challenges, increasing student participation by 40%.</p>
          <p>Collaborated on designing problem sets, evaluating 200+ solutions for participants.</p>
        </Notes>
      </TimelineEntry>
      
      <TimelineEntry title="Technical Team Member - AWS Cloud Club" timestamp="August 2023 - February 2024" Icon={Briefcase} tint="blue">
        <Notes>
          <p>Organized Student Symposium 2023 with 700+ attendees focused on cloud technologies.</p>
          <p>Completed the #100DaysOfAWS challenge, gaining hands-on experience in AWS services like EC2, S3, and Lambda.</p>
        </Notes>
      </TimelineEntry>
    </>
  );
}
