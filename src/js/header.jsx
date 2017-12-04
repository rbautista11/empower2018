import React, { Component } from 'react';
import { render } from 'react-dom';
/* This class will be a reusable header that will be used throughout the site.
 *
 */
export class Header extends Component {
  render() {
    return(
      <div>
        <ul>
          <li>What Is Empower?</li>
          <li>SHPE@UCSD</li>
          <li>Itinerary</li>
          <li>Register</li>
          <li>Parking</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}
