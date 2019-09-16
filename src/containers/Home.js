import React from 'react';
import Landing from '../components/Landing.js'
import About from '../components/About';
import Schedule from '../components/Schedule';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';
import blockFestLogo from '../assets/blockfest2019.svg';
import venue from '../assets/venue.svg';
import microsoftHQ from '../assets/microsofthq.jpg';
import microsoftLogo from '../assets/microsoftlogo.svg';
import FAQlogo from '../assets/FAQ.svg';
import '../scss/Home.scss';

class Home extends React.Component {

  componentDidMount() {
    let root = document.querySelector('#root');
    root.classList.add('home-root');
    window.scrollTo(0,0);
  }

  componentWillUnmount() {
    let root = document.querySelector('#root');
    root.classList.remove('home-root');
  }

  render() {
    return(
      <>
      <div className='landing-section'>
        <Landing />
      </div>
        <div className='about-section'>
          <About />
        </div>
        <div className='schedule-section'>
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
          <h1>Contact Us</h1>
          <div>
            For any questions or inquiries,<br/>
            please reach us at <a href='mailto:info@blockfest.co'><span>info@blockfest.co</span></a>.<br/>
            Also, follow us <a className='twitter' href='https://twitter.com/BlockFestNYC'>@BlockFestNYC</a> on Twitter!
          </div>
        </div>
        <div className='footer'>
          <div className='fl-container'>
            <img src={blockFestLogo} className='footer-logo' alt=''/>
          </div>
          <div className='link-container'>
            <Link to='/rules'>Code of Conduct</Link>
          </div>
          <div className='copyright-container'>
            <div className='copyright'>Copyright © BlockFest Group 2019</div>
          </div>
        </div>
      </>
      )
  }
}

export default Home;
