 import { Link } from 'react-router-dom';



export default function DeskTopNavigation() {

  return (

    <>

    <nav>

              <Link className="logo-link" to="/" aria-label="Rushn logo">

                <span className="logo" aria-hidden="true" />

              </Link>

              <ul>

                <li><Link to="/home">Home</Link></li>

                <li><Link to="/schedule">Schedule</Link></li>

                <li><Link to="/contact">Contact</Link></li>

                <li><Link to="/about">About</Link></li>

                <li><Link to="/socials">Socials</Link></li>

              </ul>

            </nav>

            </>

  );

}