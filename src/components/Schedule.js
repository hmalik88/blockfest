import React from 'react';
import Slot from './Slot';
import scheduleSVG from '../assets/schedule.svg';
import buttonTip from '../assets/buttontip.svg';
import '../scss/Schedule.scss';

const SaturdaySchedule = [
  ['8:30 AM', 'Registration opens, breakfast'],
  ['9:30 AM', 'Kick-off'],
  ['10 AM', 'Form teams'],
  ['10:30 AM', 'Hackathon begins'],
  ['12 PM', 'Breakout sessions / workshops'],
  ['2 PM', 'Breakout sessions / workshops'],
  ['3 PM', 'Breakout sessions / workshops'],
  ['4 PM', 'Breakout sessions / workshops'],
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
      sunTip.style.display =  window.innerWidth < 570 ? 'none' : 'inline-block';
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
      satTip.style.display = window.innerWidth < 570 ? 'none' : 'inline-block';
      sat.style.pointerEvents = 'none';
    }
  }

  renderSaturday = () => {
    return SaturdaySchedule.map(el => {
      return <Slot key={el} time={el[0]} activity={el[1]} />
    })
  }

  renderSunday = () => {
    return SundaySchedule.map(el => {
      return <Slot key={el} time={el[0]} activity={el[1]} />
    })
  }

  reduceSectionHeight = () => {
    let root = document.querySelector('#root');
    let scheduleSection = document.querySelector('.schedule-section');
    root.classList.remove('home-root');
    root.classList.add('home-root-short');
    scheduleSection.className = 'schedule-section-short';
    // let scheduleGrid = document.querySelector('.schedule-grid');
    // let slotPortion = document.querySelector('.slot-portion');
    // let venueSection = document.querySelector('.venue-section');
    // let FAQSection = document.querySelector('.FAQ-section');
    // let contactSection = document.querySelector('.contact-section');
    // let footer = document.querySelector('.footer');
    // let judgesSection = document.querySelector('.judges-speakers-section');
    // judgesSection.style.top = '2366px'
    // footer.style.top = '4802px';
    // contactSection.style.top = '4402px';
    // FAQSection.style.top = '3066px';
    // venueSection.style.top = '2366px';
    // scheduleSection.style.height = '830px';
    // scheduleGrid.style.height = '630px';
    // slotPortion.style.height = '500px';
  }

  increaseSectionHeight = () => {
    let root = document.querySelector('#root');
    let scheduleSection = document.querySelector('.schedule-section-short');
    root.classList.remove('home-root-short');
    root.classList.add('home-root');
    scheduleSection.className = 'schedule-section';
    // let scheduleGrid = document.querySelector('.schedule-grid');
    // let slotPortion = document.querySelector('.slot-portion');
    // let venueSection = document.querySelector('.venue-section');
    // let FAQSection = document.querySelector('.FAQ-section');
    // let contactSection = document.querySelector('.contact-section');
    // let footer = document.querySelector('.footer');
    // let judgesSection = document.querySelector('.judges-speakers-section');
    // judgesSection.style.top = '2815px'
    // footer.style.top = '5250px';
    // contactSection.style.top = '4850px';
    // FAQSection.style.top = '3515px';
    // venueSection.style.top = '2815px';
    // scheduleSection.style.height = '1280px';
    // scheduleGrid.style.height = '1080px';
    // slotPortion.style.height = '950px';
  }

  render() {
     let schedule = this.state.isSunday ? this.renderSunday() : this.renderSaturday();
    return(
      <>
        <div className='schedule-svg-section'>
          <img src={scheduleSVG} alt='' className='schedule-svg' />
        </div>
        <div className='button-portion'>
          <div className='sat-button'>
            <button className='saturday selected' onClick={this.selectDay}>
              December 7th
            </button>
            <img src={buttonTip} className='button-tip1' alt='' />
          </div>
          <div className='sun-button'>
            <button className='sunday' onClick={this.selectDay}>
              December 8th
            </button>
            <img src={buttonTip} className='button-tip2' alt='' />
          </div>
        </div>
        <div className='slot-portion'>
            {schedule}
        </div>
      </>
      )
  }
}

export default Schedule;
