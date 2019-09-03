import React from 'react';
import Slot from './Slot';
import buttonTip from '../assets/buttontip.svg';
import '../scss/Schedule.scss';

const SaturdaySchedule = [
  ['8:30 AM', 'Registration opens, breakfast'],
  ['9:30 AM', 'Kick-off'],
  ['10 AM', 'Form teams'],
  ['10:30 AM', 'Hackathon begins'],
  ['12 PM', 'Breakout session # 1'],
  ['2 PM', 'Breakout session # 2'],
  ['3 PM', 'Breakout session # 3'],
  ['4 PM', 'Breakout session # 4'],
  ['7 PM', 'Doors close for the night']
]

const SundaySchedule = [
  ['8:30 AM', 'Breakfast'],
  ['12:30 PM', 'Practice pitches'],
  ['5 PM', 'Presentations & judging'],
  ['6:30 PM', 'Closing remarks & speeches']
]

class Schedule extends React.Component {

  state = {isSunday: false};

  selectDay = e => {
    let sat = document.querySelector('.saturday');
    let sun = document.querySelector('.sunday');
    let satTip = document.querySelector('.button-tip1');
    let sunTip = document.querySelector('.button-tip2');
    let slotPortion = document.querySelector('.slot-portion');
    satTip.style.display = 'none';
    sunTip.style.display = 'none';
    sat.classList.remove('selected');
    sun.classList.remove('selected');
    if (e.target.className === 'sunday') {
      sat.style.pointerEvents = 'auto';
      slotPortion.className = 'slot-portion leave';
      setTimeout(() => {
        this.setState({isSunday: true}, () => {
          slotPortion.className = 'slot-portion enter';
          this.reduceSectionHeight();
        });
      }, 350)
      sun.classList.add('selected');
      console.log('before:', window.scrollY)
      console.log('after:', window.scrollY)
      sunTip.style.display = 'inline-block';
      sun.style.pointerEvents = 'none';
    } else {
      sun.style.pointerEvents = 'auto';
      slotPortion.className = 'slot-portion leave';
      setTimeout(() => {
        this.setState({isSunday: false}, () => {
          slotPortion.className = 'slot-portion enter';
          this.increaseSectionHeight();
        });
      }, 350);
      sat.classList.add('selected')
      console.log('before:', window.scrollY)
      console.log('after:', window.scrollY)
      satTip.style.display = 'inline-block';
      sat.style.pointerEvents = 'none';
    }
  }

  renderSaturday = () => {
    return SaturdaySchedule.map(el => {
      return <Slot time={el[0]} activity={el[1]} />
    })
  }

  renderSunday = () => {
    return SundaySchedule.map(el => {
      return <Slot time={el[0]} activity={el[1]} />
    })
  }

  reduceSectionHeight = () => {
    let scheduleSection = document.querySelector('.schedule-section');
    let scheduleGrid = document.querySelector('.schedule-grid');
    let slotPortion = document.querySelector('.slot-portion');
    let judgesSection = document.querySelector('.judges-speakers-section');
    judgesSection.style.top = '2366px'
    scheduleSection.style.height = '830px';
    scheduleGrid.style.height = '630px';
    slotPortion.style.height = '500px';
  }

  increaseSectionHeight = () => {
    let scheduleSection = document.querySelector('.schedule-section');
    let scheduleGrid = document.querySelector('.schedule-grid');
    let slotPortion = document.querySelector('.slot-portion');
    let judgesSection = document.querySelector('.judges-speakers-section');
    judgesSection.style.top = '2816px'
    scheduleSection.style.height = '1280px';
    scheduleGrid.style.height = '1080px';
    slotPortion.style.height = '950px';
  }

  render() {
     let schedule = this.state.isSunday ? this.renderSunday() : this.renderSaturday();
    return(
      <div className='schedule-grid'>
        <div className='button-portion'>
          <div className='sat-button'>
            <button className='saturday selected' onClick={this.selectDay}>December 7th</button>
            <img src={buttonTip} className='button-tip1' alt='' />
          </div>
          <div className='sun-button'>
            <button className='sunday' onClick={this.selectDay}>December 8th</button>
            <img src={buttonTip} className='button-tip2' alt='' />
          </div>
        </div>
        <div className='slot-portion'>
            {schedule}
        </div>
      </div>
      )
  }
}

export default Schedule;
