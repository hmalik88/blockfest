import React from 'react';
import judges from '../assets/judges.svg';
import '../scss/Judges.scss';

function JudgesAndSpeakers() {
  return(
    <>
      <img src={judges} alt ='' className='judges-svg' />
    </>
    )
}

export default JudgesAndSpeakers;
