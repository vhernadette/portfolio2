import React from 'react';
import '../../styles/Home.css';
import ProfileImage from '../../assets/Vhernadette Sasing.jpg';

function Home() {
  return (
    <div className="home">
      <div clasName="headerContainer d-flex align-items-center flex-column" style={{ img: `url(${ProfileImage})`}}>
        <h1>VHERNADETTE SASING</h1>
        <h4>VIRTUAL ASSISTANT|WEB DEV|TECH SUPPORT|CUSTOMER REP|TRAINING MANAGER </h4>
      </div>
    </div>

  );
}

export default Home
