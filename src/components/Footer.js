import React from 'react';
import blockFestLogo from '../assets/blockfest2019.svg';
import { Link } from 'react-router-dom';
import '../scss/Footer.scss';

function Footer() {
  return(
    <>
      <div className='fl-container'>
        <img src={blockFestLogo} className='footer-logo' alt=''/>
      </div>
      <div className='link-container'>
        <Link to='/rules'>Code of Conduct</Link>
      </div>
      <div className='copyright-container'>
        <div className='copyright'>
          Copyright © BlockFest Group 2019
        </div>
      </div>
    </>
    )
}

export default Footer;
