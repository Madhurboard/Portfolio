import React from "react";
import { Award } from "react-feather";
import { TimelineEntry, Notes } from "./Entry";

export function Achievements() {
  return (
    <>
      <TimelineEntry title="Winner – Horizon AI Hackathon" timestamp="2024" Icon={Award} tint="yellow">
        <Notes>
            <p>Won $1000 at the Horizon AI Hackathon organized by Miami University for developing SickleSense — a computer vision solution for detecting sickle cells in blood samples.</p>
        </Notes>
      </TimelineEntry>

      <TimelineEntry title="Winner – Talent Fusion 2024" timestamp="2024" Icon={Award} tint="blue">
        <Notes>
          <p>Won top honors at Talent Fusion 2024. Recognized for technical excellence and presentation quality.</p>
        </Notes>
      </TimelineEntry>

      <TimelineEntry title="Top 25 Teams – SBI CYI at IIT Delhi" timestamp="2024" Icon={Award} tint="green">
        <Notes>
          <p>Achieved top 25 rank out of 18000+ national teams in the State Bank of India’s College Youth Initiative held at IIT Delhi.</p>
        </Notes>
      </TimelineEntry>

      <TimelineEntry title="Consecutive Winner – DIGICODE" timestamp="2023 & 2024" Icon={Award} tint="red">
        <Notes>
          <p>Won DIGICODE coding competition two years in a row, demonstrating strong problem-solving, speed, and code efficiency in algorithmic contests.</p>
        </Notes>
      </TimelineEntry>
    </>
  );
}
