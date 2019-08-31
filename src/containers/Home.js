import React from 'react';
import NavBar from '../components/NavBar'
import FAQ from '../components/FAQ'
import blockFestLogo from '../assets/blockfest2019.svg';
import blockFestText from '../assets/blockfesttext.svg';
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
          <div className='date-text'>December 7-8, 2019</div>
          <div className='location'>
            <div className='location-text'>New York City, NY</div>
              <div className='apply'>
                <div className='apply-text'>Apply to Hack</div>
                <div className='sponsor'>
                  Become a sponsor
              </div>
            </div>
          </div>
        </div>
      </>
      )
  }
}

export default Home;
