import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import '../styles/About.css';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import '../styles/ResumeButton.css';
import '../styles/About.css';

function About() {
  return (
    <div className="About">
      <VerticalTimeline lineColor="#272829">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2005 - 2008"
          iconStyle={{ background: '#272829', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Technological Institute of the Philippines</h3>
          <p>Associate in Computer Technology</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <VerticalTimeline lineColor="#272829">
        <VerticalTimelineElement
          className="vertical-timeline-element--certificate"
          date="March 2023 - July 2023"
          iconStyle={{ background: '#272829', color: '#fff' }}
          icon={<CardMembershipIcon />}
        >
          <h3 className="vertical-timeline-element-title">KODEGO</h3>
          <p>Full Stack Web Developer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

function ResumeButton() {
  const handleDownloadResume = () => {
    const resumeURL = 'https://drive.google.com/file/d/10w6LVQgtcekRR9ryRY89Q9_kZPBUHW0_/view?usp=sharing';
    window.open(resumeURL, '_blank');
  };

  return (
    <div className="resume-button-below" onClick={handleDownloadResume}>
      Download Resume
    </div>
  );
}

export default function AboutWithButton() {
  return (
    <div>
      <About />
      <ResumeButton />
    </div>
  );
}
