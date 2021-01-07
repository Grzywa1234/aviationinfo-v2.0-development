import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

function Nav() {
  return (
      <nav className="nav-box">
            <Link to="/">
                <h1 className="nav-box__h1 link">Home</h1>
            </Link>
            <ul className="link-box">
                <li>
                    <a className="link" href="https://airspace.pansa.pl/" target="blank">AUP</a>
                </li>
                <li>
                    <a className="link" href="https://www.ais.pansa.pl/aip/aip.html" target="blank">AIP Civ</a>
                </li>
                <li>
                    <a className="link" href="https://www.ais.pansa.pl/mil/aip.html" target="blank">AIP Mil</a>
                </li>
                <Link to="/converter" style={{ textDecoration: 'none' }}>
                    
                        <h1 className="link link--converter">Converter</h1>
                    
                </Link>
            </ul>
      </nav>
  );
}

export default Nav;