import React from 'react';
import '../scss/Slot.scss';

class Slot extends React.Component {
  render() {
    return(
      <div className='slot'>
        <div className='slot-time'>{this.props.time}</div>
        <div className='slot-activity'>{this.props.activity}</div>
      </div>
      )
  }
}

export default Slot;
