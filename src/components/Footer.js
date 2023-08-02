import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.facebook.com/drich12.drich12/" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </a>
        <a href="https://www.youtube.com/@sv12121/about/" target="_blank" rel="noopener noreferrer">
          <YouTubeIcon />
        </a>
        <a href="https://www.linkedin.com/in/vhernadette-sasing-08aba8279/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/vhernadette" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      </div>
      <p>2023 vherna.dette@gmail.com</p>
    </div>
  )
}

export default Footer;
