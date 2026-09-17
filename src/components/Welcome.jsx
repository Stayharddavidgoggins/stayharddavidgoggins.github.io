 import { useNavigate } from 'react-router-dom';

import "../Welcome.css";


import welcomeImage from '../assets/OIP (1).webp';



function Welcome() {

  const navigate = useNavigate();



  const handleEnter = () => {

    navigate('/home');

  };



  return (

    <div className="welcome-container">

      <img

        src={welcomeImage}

        alt=""

        aria-hidden="true"

        className="welcome-background-image"

      />

      <header className="welcome-header">

        <h1 className="welcome-title">Rushn</h1>

      </header>

      <div className="welcome-sidebar welcome-sidebar-left">

        <div className="welcome-vertical-text">I was never meant to fit in</div>

      </div>

      <div className="welcome-content">

        <div className="welcome-left">

          <div className="welcome-project-note">

            Just a reminder guys that this website is made as a school project

            by a learning software engineer so it might not be perfect!

          </div>

        </div>

        <div className="welcome-right">

          <div className="video-wrapper">

            <h2 className="video-title">My gameplay</h2>

            <div className="arrow-down">↓</div>

            <a

              href="https://www.youtube.com/watch?v=FQLrDM-EOi4"

              target="_blank"

              rel="noopener noreferrer"

              className="video-thumbnail"

            >

              <img

                src="https://img.youtube.com/vi/FQLrDM-EOi4/maxresdefault.jpg"

                alt="How an 17yr old entry scrims"

                className="thumbnail-img"

              />

              <div className="play-button">▶</div>

            </a>

          </div>

        </div>

      </div>

      <div className="welcome-actions">

        <div className="welcome-ready">Ready to go?</div>

        <button className="welcome-button" onClick={handleEnter}>

          Go to the website

        </button>

      </div>

      <div className="welcome-sidebar welcome-sidebar-right">

        <div className="welcome-vertical-text">I was never meant to fit in</div>

      </div>

    </div>

  );

}



export default Welcome;

