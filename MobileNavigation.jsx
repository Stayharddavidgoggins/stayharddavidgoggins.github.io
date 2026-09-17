 import { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';

import InfoIcon from '@mui/icons-material/Info';

import CloseIcon from '@mui/icons-material/Close';

import MenuIcon from '@mui/icons-material/Menu';

import PhoneIcon from '@mui/icons-material/Phone';

import ScheduleIcon from '@mui/icons-material/CalendarMonth';

import ShareIcon from '@mui/icons-material/Share';



const links = [

  { to: '/home', label: 'Home', icon: HomeIcon },

  { to: '/schedule', label: 'Schedule', icon: ScheduleIcon },

  { to: '/about', label: 'About Me', icon: InfoIcon },

  { to: '/contact', label: 'Contact', icon: PhoneIcon },

  { to: '/socials', label: 'Socials', icon: ShareIcon },

];



export default function MobileNavigation() {

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();



  const closeMenu = () => setIsOpen(false);



  return (

    <header className={`mobile-navigation${isOpen ? ' menu-open' : ''}`}>

      <Link className="mobile-logo-link" to="/" aria-label="Rushn logo" onClick={closeMenu}>

        <span className="logo" aria-hidden="true" />

      </Link>



      <Link className="mobile-navigation-link" to="/home" onClick={closeMenu}>

        <HomeIcon aria-hidden="true" />

        <span>Home</span>

      </Link>



      <Link className="mobile-navigation-link" to="/contact" onClick={closeMenu}>

        <PhoneIcon aria-hidden="true" />

        <span>Contact</span>

      </Link>



      <button

        className="mobile-menu-toggle"

        type="button"

        aria-expanded={isOpen}

        aria-controls="mobile-page-menu"

        aria-label={isOpen ? 'Close page menu' : 'Open page menu'}

        onClick={() => setIsOpen((open) => !open)}

      >

        {isOpen ? <CloseIcon aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}

        <span>{isOpen ? 'Close' : 'Menu'}</span>

      </button>



      {isOpen && (

        <nav id="mobile-page-menu" className="mobile-page-menu" aria-label="Page navigation">

          {links.map(({ to, label, icon: Icon }) => (

            <Link

              className={location.pathname === to ? 'active' : ''}

              key={to}

              to={to}

              onClick={closeMenu}

            >

              <Icon aria-hidden="true" />

              <span>{label}</span>

            </Link>

          ))}

        </nav>

      )}

    </header>

  );

}