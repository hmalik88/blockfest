import React from 'react';
import Schedule from '../components/Schedule.js'
import NavBar from '../components/NavBar'
import FAQ from '../components/FAQ'
import blockFestLogo from '../assets/blockfest2019.svg';
import blockFestText from '../assets/blockfesttext.svg';
import calendarIcon from '../assets/calendaricon.svg';
import schedule from '../assets/schedule.svg'
import skyline from '../assets/skyline.svg';
import pin from '../assets/pin.svg';
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
          <div className='about-headline'>
            <h1 className='headline-text'>Build the Decentralized Future</h1>
          </div>
          <div className='about-text'>
            <p className='about-paragraph'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The leading minds in the cryptocurrency space are joining over 400 hackers from around the world to collaborate together on decentralized applications using Ethereum. With an exponential increase in adoption, developer interest, and other teams building on top of Ethereum, there has never been a better time to be a part of the community, building Web 3.0.</p>
          </div>
        </div>
        <div className='schedule-section'>
          <img src={schedule} alt='' className='schedule-svg' />
          <Schedule />
        </div>
      </>
      )
  }
}

export default Home;
