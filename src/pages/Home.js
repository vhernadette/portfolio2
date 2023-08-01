import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Home.css";
import HomePic from '../../src/Assets/Images/Vhernadette Sasing.jpg';


function Home() {
  return (
    <div className="home">
        <div className="about">
            <img src={HomePic} alt="profile" />
            <h1>VHERNADETTE SASING</h1>
             <div className="prompt"> <p> VIRTUAL ASSISTANT | WEB DEVELOPER | TECHNICAL SUPPORT | CUSTOMER SUPPORT | TRAINING MANAGER</p>
             <div className="media">
             <FacebookIcon />
             <YouTubeIcon />
             <LinkedInIcon />
             </div>
            </div>
            </div>
            <div className="skills">
                <h1>SKILLS</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Web Developer</h2>
                        <span>HTML, CSS, Bootstrap, Javascript</span>
                    </li>
                    <li className="item">
                        <h2>Email and chat communication</h2>
                        <span>Use Separate Email Accounts, Organize Emails with Folders/Labels, Set up Filters and Rules, Check and Respond Regularly  </span>
                   </li>
                    <li className="item">
                        <h2>Social Media Administration</h2>
                        <span>Creating and Managing Social Media Profiles, Content Creation and Curation, Scheduling and Publishing Posts, Social Media Monitoring</span>
                    </li>
                    <li className="item">
                        <h2>Property Management</h2>
                        <span>Tenant Acquisition and Screening, Lease Agreement Management, Rent Collection, Property Maintenance, Inspection, Reporting</span>
                    </li>
                    <li className="item">
                        <h2>Data Entry</h2>
                        <span>Data Collection, Data Input, Accuracy, Data Validation, Data Cleaning, Data Organization, Data Formatting, Data Maintainance, Confidentiality</span>
                    </li>
                    <li className="item">
                        <h2>Email Management</h2>
                        <span>Email Organization, Inbox Management, Unsubscribe and Filtering, Priority Handling, Drafting and Sending, Response Management, Email Etiquette, Email Security</span>
                    </li>
                    <li className="item">
                        <h2>Calendar Management</h2>
                        <span>Creating and Maintaining Calendars, Scheduling, Prioritization, Setting Reminders, Time Blocking, Color Coding, Syncing Calendars, Time Zone Management </span>
                    </li>
                </ol>
             </div>
    </div>
  )
}

export default Home;
