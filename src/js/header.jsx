/* This class will be a reusable header that will be used throughout the site.
 *
 */
import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/header.css';

export class Header extends Component {
  render() {
    return(
      <div>
        <ul>
          <li><a>What Is Empower?</a></li>
          <li><a>SHPE@UCSD</a></li>
          <li><a>Itinerary</a></li>
          <li><a>Register</a></li>
          <li><a>Parking</a></li>
          <li><a>FAQ</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    );
  }
}
