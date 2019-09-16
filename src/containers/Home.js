import React from 'react';
import Landing from '../components/Landing';
import About from '../components/About';
import Schedule from '../components/Schedule';
import Venue from '../components/Venue';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import blockFestLogo from '../assets/blockfest2019.svg';
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
        <Venue />
      </div>
      <div className="FAQ-section">
        <FAQ />
      </div>
      <div className='contact-section'>
        <Contact />
      </div>
      <div className='footer'>
        <Footer />
      </div>
      </>
      )
  }
}

export default Home;
