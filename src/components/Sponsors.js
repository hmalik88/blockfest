import React from 'react';
import sponsor from '../assets/sponsors.svg';
import gold from '../assets/master.svg';
import silver from '../assets/miner.svg';
import bronze from '../assets/validator.svg';
import coinbase from '../assets/coinbase.svg';
import celer from '../assets/celer.svg';
import consensys from '../assets/consensys.svg';
import '../scss/Sponsors.scss';

function Sponsors() {
  return(
      <>
        <div className='sponsor-svg-div'>
          <img src={sponsor} className='sponsor-svg' alt='' />
        </div>
        <div className='tier-container'>
          <div className='gold-tier'>
            <img src={gold} alt='' className='master' />

          </div>
          <div className='silver-tier'>
            <img src={silver} alt='' className='miner' />
          </div>
          <div className='bronze-tier'>
            <img src={bronze} alt='' className='validator' />
          </div>
        </div>
      </>
    )
}

export default Sponsors;
