 import roseImage from './assets/rose.png';



export default function About() {

  return (

    <section id="about" className="about-section">

      <img src={roseImage} alt="" aria-hidden="true" className="about-corner about-corner-top-right" />

      <img src={roseImage} alt="" aria-hidden="true" className="about-corner about-corner-top-left" />

      <img src={roseImage} alt="" aria-hidden="true" className="about-corner about-corner-bottom-right" />

      <img src={roseImage} alt="" aria-hidden="true" className="about-corner about-corner-bottom-left" />

      <h1>About Me</h1>

      <div className="about-grid">

        <article className="about-card about-card-intro">

          <span className="about-label">01 / The player</span>

          <h2>Meet Rushn</h2>

          <p>

            I am Leevi “Rushn” Kotkavalkama, a 17-year-old player working

            toward going pro in esports.

          </p>

        </article>



        <article className="about-card about-card-esports">

          <span className="about-label">02 / Competition</span>

          <h2>Built for the grind</h2>

          <p>

            I have over four years of experience in competitive gaming and

            have competed in multiple tournaments, including the 2025 ELC and

            Fire Challenger series.

          </p>

        </article>



        <article className="about-card about-card-achievements">

          <span className="about-label">03 / Beyond esports</span>

          <h2>More than one arena</h2>

          <p>

            I am also a software development student. In floorball, I have

            become a two-time Finnish champion and earned two best defender

            titles, along with recognition for points, goals, and assists.

          </p>

        </article>



        <article className="about-card about-card-community">

          <span className="about-label">04 / The community</span>

          <h2>Play together</h2>

          <p>

            Through streaming and content creation, I am building a community

            where I play with viewers daily. Join in through Discord or email

            me to be part of what comes next.

          </p>

        </article>

      </div>

    </section>

  );

}

