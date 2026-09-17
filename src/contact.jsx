 import roseImage from './assets/rose.png';



function DiscordIcon() {

  return (

    <img src="https://cdn.simpleicons.org/discord/ffffff" alt="" />

  );

}



function GmailIcon() {

  return (

    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="" />

  );

}



export default function Contact() {

  return (

    <section

      id="contact"

      className="contact-section"

    >

      <img src={roseImage} alt="" aria-hidden="true" className="about-corner about-corner-top-right" />

      <img src={roseImage} alt="" aria-hidden="true" className="about-corner about-corner-top-left" />

      <img src={roseImage} alt="" aria-hidden="true" className="about-corner about-corner-bottom-right" />

      <img src={roseImage} alt="" aria-hidden="true" className="about-corner about-corner-bottom-left" />

      <div className="contact-monitor">

        <div className="contact-screen">

          <div className="contact-screen-bar" aria-hidden="true">

            <span className="contact-screen-dot contact-screen-dot-red" />

            <span className="contact-screen-dot contact-screen-dot-yellow" />

            <span className="contact-screen-dot contact-screen-dot-green" />

            <span className="contact-screen-address">rushn.gg / contact</span>

          </div>

          <div className="contact-header">

            <h1>Contact Me</h1>

          </div>

          <div className="contact-list">

            <div className="contact-line contact-line-discord">

              <span className="contact-logo" aria-hidden="true"><DiscordIcon /></span>

              <span className="contact-copy">

                <span className="contact-platform">Discord</span>

                <strong>itsrushn</strong>

              </span>

            </div>

            <div className="contact-line contact-line-gmail">

              <span className="contact-logo" aria-hidden="true"><GmailIcon /></span>

              <span className="contact-copy">

                <span className="contact-platform">Gmail</span>

                <strong>lkotkavalkama@gmail.com</strong>

              </span>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

