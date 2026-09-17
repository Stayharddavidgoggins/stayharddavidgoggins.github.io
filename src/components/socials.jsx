 import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import TwitterIcon from '@mui/icons-material/Twitter';

import YouTubeIcon from '@mui/icons-material/YouTube';

import roseImage from '../assets/rose.png';



function TikTokIcon() {

  const mark = 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2-2.74v-3.5a6.34 6.34 0 1 0 5.45 6.28V8.41a8.16 8.16 0 0 0 4.77 1.52V6.69z';



  return (

    <svg viewBox="0 0 24 24" aria-hidden="true">

      <path d={mark} fill="#25f4ee" transform="translate(-1 1)" />

      <path d={mark} fill="#fe2c55" transform="translate(1 -1)" />

      <path d={mark} fill="currentColor" />

    </svg>

  );

}



function TwitchIcon() {

  return (

    <svg viewBox="0 0 24 24" aria-hidden="true">

      <path d="M3 2h18v14l-5 5h-4l-4 4v-4H3V2zm3 3v13h4v2l3-2h2l3-3V5H6zm4 3h2v5h-2V8zm5 0h2v5h-2V8z" fill="currentColor" />

    </svg>

  );

}



const socialLinks = [

  { name: 'Twitter / X', handle: '@RushnDevils', href: 'https://x.com/@RushnDevils', icon: TwitterIcon, className: 'social-card-twitter' },

  { name: 'TikTok', handle: '@itsrushnn', href: 'https://www.tiktok.com/@itsrushnn', icon: TikTokIcon, className: 'social-card-tiktok' },

  { name: 'YouTube', handle: 'Rushn-DVL', href: 'https://www.youtube.com/@Rushn-DVL', icon: YouTubeIcon, className: 'social-card-youtube' },

  { name: 'Twitch', handle: 'Rushn_R6', href: 'https://twitch.tv/Rushn_R6', icon: TwitchIcon, className: 'social-card-twitch' },

];



export default function Socials() {

  return (

    <section className="socials-section">

      <img src={roseImage} alt="" aria-hidden="true" className="about-corner about-corner-top-right" />

      <img src={roseImage} alt="" aria-hidden="true" className="about-corner about-corner-top-left" />

      <img src={roseImage} alt="" aria-hidden="true" className="about-corner about-corner-bottom-right" />

      <img src={roseImage} alt="" aria-hidden="true" className="about-corner about-corner-bottom-left" />

      <div className="socials-header">

        <span className="socials-kicker">Find me online</span>

        <h1>Socials</h1>

        <p>Follow along for matches, clips, and everything happening in the Rushn community.</p>

      </div>

      <div className="socials-grid">

        {socialLinks.map(({ name, handle, href, icon: Icon, className }) => (

          <a className={`social-card ${className}`} href={href} key={name} target="_blank" rel="noopener noreferrer">

            <span className="social-card-icon" aria-hidden="true"><Icon /></span>

            <span className="social-card-copy">

              <span className="social-card-name">{name}</span>

              <span className="social-card-handle">{handle}</span>

            </span>

            <OpenInNewIcon className="social-card-arrow" aria-hidden="true" />

          </a>

        ))}

      </div>

    </section>

  );

}