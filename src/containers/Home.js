import React from 'react';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Schedule from '../components/Schedule';
import Judges from '../components/Judges';
import Sponsors from '../components/Sponsors';
import FAQ from '../components/FAQ';
import blockFestLogo from '../assets/blockfest2019.svg';
import blockFestText from '../assets/blockfesttext.svg';
import calendarIcon from '../assets/calendaricon.svg';
import schedule from '../assets/schedule.svg';
import skyline from '../assets/skyline.svg';
import pin from '../assets/pin.svg';
import venue from '../assets/venue.svg';
import microsoftHQ from '../assets/microsofthq.jpg';
import microsoftLogo from '../assets/microsoftlogo.svg';
import FAQlogo from '../assets/FAQ.svg';
import '../scss/Home.scss';

class Home extends React.Component {

  componentDidMount() {
    let root = document.querySelector('#root');
    root.classList.add('home-root');
  }

  componentWillUnmount() {
    let root = document.querySelector('#root');
    root.classList.remove('home-root');
  }

  render() {
    return(
      <>
        <img className='blockLogo' src={blockFestLogo} alt='' />
        <img className='blockText' src={blockFestText} alt='' />
        <div className='headline'>NYC's premier blockchain hackathon hosted by BlockFest Group</div>
        <div className='dlt-pill'>
          <img className='calendar-icon' src={calendarIcon} alt='' />
          <div className='date-text'>December 7-8, 2019</div>
          <div className='location'>
            <img className='pin' src={pin} alt='' />
            <div className='location-text'>New York City, NY</div>
              <div className='apply'>
                <div className='apply-text'>Apply to Hack</div>
                <div className='sponsor'>
                  Become a sponsor
              </div>
            </div>
          </div>
        </div>
        <img className='skyline' src={skyline} alt='' />
        <div className='about-section'>
          <About />
        </div>
        <div className='schedule-section'>
          <img src={schedule} alt='' className='schedule-svg' />
          <Schedule />
        </div>
        <div className='venue-section'>
          <img src={venue} alt='' className='venue-svg' />
          <div className='location-container'>
            <div className='location-pic-container'>
              <img src={microsoftHQ} alt='' className='hqPic' />
            </div>
            <div className="location-details-container">
              <img src={microsoftLogo} alt='' className='microsoft-logo' />
              <h1 className='microsoft-headline'>Microsoft HQ NYC</h1>
              <p className="microsoft-headline-text">11 Times Sq. New York, NY 10036</p>
              <a href='https://www.google.com/maps/dir/?api=1&origin=Your+location&destination=Microsoft+Times+Square+New+York+NY&travelmode=transit' target="_blank" rel="noopener noreferrer"><button className='directions'>Click here for directions</button></a>
            </div>
          </div>
        </div>
        <div className="FAQ-section">
          <img src={FAQlogo} className='FAQ-svg' alt='' />
          <FAQ />
        </div>
        <div className='contact-section'>

        </div>
        <div className='footer'>

        </div>
      </>
      )
  }
}

export default Home;
