import React from 'react';
import sponsor from '../assets/sponsors.svg';
import '../scss/Sponsors.scss';

function Sponsors() {
  return(
      <>
        <div className='sponsor-svg-div'>
          <img src={sponsor} className='sponsor-svg' alt='' />
        </div>
        <div className='tier-container'>

        </div>
      </>
    )
}

export default Sponsors;
