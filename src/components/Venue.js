import React from 'react';
import venue from '../assets/venue.svg';
import microsoftHQ from '../assets/microsofthq.jpg';
import microsoftLogo from '../assets/microsoftlogo.svg';
import '../scss/Venue.scss';

function Venue() {
  return(
    <>
      <div className='venue-svg-section'>
        <img src={venue} alt='' className='venue-svg' />
      </div>
      <div className='location-section'>
        <div className='location-container'>
          <div className='location-pic-container'>
            <img src={microsoftHQ} alt='' className='hqPic' />
          </div>
          <div className="location-details-container">
            <div className='microsoft-details-container'>
              <div className="microsoft-logo-container">
                <div className='logo-inner-container'>
                  <img src={microsoftLogo} alt='' className='microsoft-logo' />
                  <h1 className='microsoft-headline'>
                    Microsoft HQ NYC
                  </h1>
                </div>
                <p className="microsoft-headline-text">
                11 Times Sq. New York, NY 10036
                </p>
              </div>
              <a href='https://www.google.com/maps/dir/?api=1&origin=Your+location&destination=Microsoft+Times+Square+New+York+NY&travelmode=transit' target="_blank" rel="noopener noreferrer">
                <button className='directions'>
                  Click here for directions
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Venue;
