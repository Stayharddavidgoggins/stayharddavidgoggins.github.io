 import heroImg from "../assets/hero.png";

import reactLogo from "../assets/react.svg";

import viteLogo from "../assets/vite.svg";

import '../App.css'



export default function HomePage() {

  return (

    <section id="home">

      <header className="home-header">

        <span className="home-kicker">Rushn / player profile</span>

        <h1>Welcome to my site</h1>

      </header>

      <div className="home-clouds">

        <article className="home-cloud home-cloud-intro">

          <p>Hey! I am Leevi “Rushn” Kotkavalkama.</p>

          <p>Here you can find information about me, my socials, and my schedule.</p>

        </article>

        <article className="home-cloud home-cloud-note">

          <p>

            This website is still under construction and will be updated in the

            future.

          </p>

          <p>Please contact me with any questions or suggestions. I hope you enjoy your stay!</p>

        </article>

      </div>

    </section>

  );

}



