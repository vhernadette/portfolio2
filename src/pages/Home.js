import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import HomePic from "../../src/Assets/Images/Vhernadette Sasing.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PsychologyIcon from "@mui/icons-material/Psychology";


function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src={HomePic} alt="profile" />
        <h1>VHERNADETTE SASING</h1>
        <div className="prompt">
          <p>
            VIRTUAL ASSISTANT | WEB DEVELOPER | TECHNICAL SUPPORT | CUSTOMER
            SUPPORT | TRAINING MANAGER | ADMIN
          </p>
          <div className="socialMedia">
            <a
              href="https://www.facebook.com/drich12.drich12/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.youtube.com/@sv12121/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/vhernadette-sasing-08aba8279/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/vhernadette"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="skills">
        <h1>SKILLS</h1>
        <VerticalTimeline lineColor="#272829">
          <VerticalTimelineElement
            className="vertical-timeline-element--title"
            date="Intermediate"
            iconStyle={{ background: "rgb(39, 40, 41)", color: "#fff" }}
            icon={<PsychologyIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Developer</h3>
            <p>HTML, CSS, Bootstrap, Javascript</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--title"
            date="Very Good"
            iconStyle={{ background: "rgb(39, 40, 41)", color: "#fff" }}
            icon={<PsychologyIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Email and Chat Communication
            </h3>
            <p>
              Use Separate Email Accounts, Organize Emails with Folders/Labels,
              Set up Filters and Rules, Check and Respond Regularly
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--title"
            date="Very Good"
            iconStyle={{ background: "rgb(39, 40, 41)", color: "#fff" }}
            icon={<PsychologyIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Social Media Administration
            </h3>
            <p>
              Creating and Managing Social Media Profiles, Content Creation and
              Curation, Scheduling and Publishing Posts, Social Media Monitoring
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--title"
            date="Very Good"
            iconStyle={{ background: "rgb(39, 40, 41)", color: "#fff" }}
            icon={<PsychologyIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Property Management
            </h3>
            <p>
              Tenant Acquisition and Screening, Lease Agreement Management, Rent
              Collection, Property Maintenance, Inspection, Reporting
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--title"
            date="Very Good"
            iconStyle={{ background: "rgb(39, 40, 41)", color: "#fff" }}
            icon={<PsychologyIcon />}
          >
            <h3 className="vertical-timeline-element-title">Data Entry</h3>
            <p>
              Data Collection, Data Input, Accuracy, Data Validation, Data
              Cleaning, Data Organization, Data Formatting, Data Maintainance,
              Confidentiality
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--title"
            date="Very Good"
            iconStyle={{ background: "rgb(39, 40, 41)", color: "#fff" }}
            icon={<PsychologyIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Email Management
            </h3>
            <p>
              UEmail Organization, Inbox Management, Unsubscribe and Filtering,
              Priority Handling, Drafting and Sending, Response Management,
              Email Etiquette, Email Security
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--title"
            date="Very Good"
            iconStyle={{ background: "rgb(39, 40, 41)", color: "#fff" }}
            icon={<PsychologyIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Calendar Management
            </h3>
            <p>
              Creating and Maintaining Calendars, Scheduling, Prioritization,
              Setting Reminders, Time Blocking, Color Coding, Syncing Calendars,
              Time Zone Management
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Home;
