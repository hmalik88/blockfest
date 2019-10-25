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
      <div className="web-wrapper">
        <div className='line-1-web'>
          <a target="none" href='https://airtable.com/shrd7eKzXp3bFFmlR' className='hack-link-web'>
            <div className='apply-web'>
              <div className='apply-text-web'>Apply to Hack</div>
            </div>
          </a>
          <a target='none' href='https://airtable.com/shrS48Pj6Zp8ljEcY' className='sponsor-link-web'>
            <div className='sponsor-web'>
                Become a sponsor
            </div>
          </a>
        </div>
        <div className='line-2-web'>
          <div className='dlt-pill-web'>
            <img className='calendar-icon-web' src={calendarIcon} alt='' />
            <div className='date-text-web'>December 7-8, 2019</div>
          </div>
          <div className='location-web'>
            <img className='pin-web' src={pin} alt='' />
            <div className='location-text-web'>New York City, NY</div>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className='line-1'>
          <a target="none" href='https://airtable.com/shrpW3DIbUY4UP27j' className='mobile-hack-link'>
            <div className='apply'>
              <div className='apply-text'>Apply to Hack</div>
            </div>
          </a>
          <a target='none' href='https://airtable.com/shrEZjdFlZAPWUM5a' className='mobile-sponsor-link'>
            <div className='sponsor'>
              Become a sponsor
            </div>
          </a>
        </div>
        <div className='line-2'>
          <div className='dlt-pill'>
            <img className='calendar-icon' src={calendarIcon} alt='' />
            <div className='date-text'>December 7-8, 2019</div>
          </div>
          <div className='location'>
            <img className='pin' src={pin} alt='' />
            <div className='location-text'>New York City, NY</div>
          </div>
        </div>
      </div>
      <img className='skyline' src={skyline} alt='' />
    </>
    )
}

export default Landing;
