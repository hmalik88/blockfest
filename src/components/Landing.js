import React from 'react';
import blockFestLogo from '../assets/blockfest2019.svg';
import blockFestText from '../assets/blockfesttext.svg';
import calendarIcon from '../assets/calendaricon.svg';
import skyline from '../assets/skyline.svg';
import pin from '../assets/pin.svg';
import '../scss/Landing.scss'

function Landing() {
  return(
    <>
      <img className='blockLogo' src={blockFestLogo} alt='' />
      <img className='blockText' src={blockFestText} alt='' />
      <div className='landing-headline'>NYC's premier blockchain hackathon hosted by BlockFest Group</div>
      <div className='dlt-pill'>
        <img className='calendar-icon' src={calendarIcon} alt='' />
        <div className='date-text'>
          December 7-8, 2019
        </div>
        <div className='location'>
          <img className='pin' src={pin} alt='' />
          <div className='location-text'>
            New York City, NY
          </div>
          <div className='apply'>
            <div className='apply-text'>
              Apply to Hack
            </div>
            <div className='sponsor'>
              Become a sponsor
            </div>
          </div>
        </div>
      </div>
      <img className='skyline' src={skyline} alt='' />
    </>
    )
}

export default Landing;
