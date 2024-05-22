import React from 'react'
import './products.css';

import { faDroplet, faMobileScreenButton, faEarthAfrica } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export default function Products() {
  return (
    <div className="nav-products-container">
      <h3>Our Work</h3>
      <div>
        <NavLink to = "/work">
          <FontAwesomeIcon icon={faDroplet} />
          <p>Oasis</p>
        </NavLink>
        <NavLink to = "/work">
          <FontAwesomeIcon icon={faMobileScreenButton} />
          <p>App</p>
        </NavLink>
        <NavLink to = "/work">
          <FontAwesomeIcon icon={faEarthAfrica} />
          <p>Outreach</p>
        </NavLink>
      </div>
    </div>
  );
}
