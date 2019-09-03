import React from 'react';
import '../scss/HeadShot.scss';

function HeadShot(props) {
  return(
    <div className='head-container'>
      <img src={props.image} alt='' className='head-shot' />
      <div className='judge-name'>{props.name}</div>
      <div className='judge-job'>{props.job}</div>
    </div>
    )
}

export default HeadShot;
