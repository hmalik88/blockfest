import React from 'react';
import '../scss/Slot.scss';

function Slot(props) {
    return(
      <div className='slot'>
        <div className='slot-time'>{props.time}</div>
        <div className='slot-activity'>{props.activity}</div>
      </div>
      )
}

export default Slot;
