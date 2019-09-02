import React from 'react';
import buttonTip from '../assets/buttontip.svg';
import '../scss/Schedule.scss'

const SaturdaySchedule = [
  ['8:30AM', 'Registration opens, breakfast'],
  ['9:30AM', 'Kick-off'],
  ['10AM', 'Form teams'],
  ['10:30AM', 'Hackathon begins'],
  ['12PM', 'Breakout session # 1'],
  ['2PM', 'Breakout session # 2'],
  ['3PM', 'Breakout session # 3'],
  ['4PM', 'Breakout session # 4'],
  ['7PM', 'Doors close for the night']
]

const SundaySchedule = [
  ['8:30AM', 'Breakfast'],
  ['12:30PM', 'Practice pitches'],
  ['5PM', 'Presentations & Judging'],
  ['6:30PM', 'Closing remarks & speeches']
]

class Schedule extends React.Component {

  state = {isSunday: false};

  selectDay = e => {
    let sat = document.querySelector('.saturday');
    let sun = document.querySelector('.sunday');
    let satTip = document.querySelector('.button-tip1');
    let sunTip = document.querySelector('.button-tip2');
    satTip.style.display = 'none';
    sunTip.style.display = 'none';
    sat.classList.remove('selected');
    sun.classList.remove('selected');
    if (e.target.className === 'sunday') {
      this.setState({isSunday: true});
      sun.classList.add('selected');
      sunTip.style.display = 'inline-block';
    } else {
      this.setState({isSunday: false});
      sat.classList.add('selected')
      satTip.style.display = 'inline-block';
    }
  }

  render() {
    console.log(this.state.isSunday);
    return(
      <div className='schedule-grid'>
        <div className='sat-button'>
          <button className='saturday selected' onClick={this.selectDay}>December 7th</button>
          <img src={buttonTip} className='button-tip1' alt='' />
        </div>
        <div className='sun-button'>
          <button className='sunday' onClick={this.selectDay}>December 8th</button>
          <img src={buttonTip} className='button-tip2' alt='' />
        </div>
      </div>
      )
  }
}

export default Schedule;
