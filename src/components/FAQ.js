import React from 'react';
import { Collapse } from 'reactstrap';
import addButton from '../assets/round-add-button.svg'
import '../scss/FAQ.scss';

class FAQ extends React.Component {

  constructor() {
    super()
    this.state = {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
      isOpen5: false,
      isOpen6: false,
      isOpen7: false,
    };
  }

  toggle = (e) => {
    let key = 'isOpen' + e.target.classList[1]
    this.setState({[key]: !this.state[key]});
  }

  render() {
    return(
      <>
        <div className='Q1'>
          <div>What is BlockFest NYC?</div>
          <img src={addButton} alt='' className='addButton 1' onClick={this.toggle} />
        </div>
        <div className='collapse-container'>
          <Collapse isOpen={this.state.isOpen1}>
            <div className='A1'>
              Blockfest NYC is an event bringing together some of the brightest minds and experts in the blockchain space in New York City. We enable teams to make something great in ~ 30 hours by providing an abundance of hacking resources like mentors, sponsors, and software. Sleeping is optional, but trying to make awesome things is not.
            </div>
          </Collapse>
        </div>
        <div className='Q2'>
          <div>Who can participate?</div>
          <img src={addButton} alt='' className='addButton 2' onClick={this.toggle} />
        </div>
        <div className='collapse-container'>
          <Collapse isOpen={this.state.isOpen2}>
            <div className='A2'>
              Anyone from anywhere in the world can join the hack. Applications are based on interest in blockchain technologies and proven ability to build! - whether that’s writing software, designing beautiful UXs, product management, or something else entirely.
            </div>
          </Collapse>
        </div>
        <div className='Q3'>
          <div>How much does it cost to attend?</div>
          <img src={addButton} alt='' className='addButton 3' onClick={this.toggle} />
        </div>
        <div className='collapse-container'>
          <Collapse isOpen={this.state.isOpen3}>
            <div className='A3'>
              Admission to Blockfest NYC is entirely free for hackers. We will be providing you with healthy meals, wifi, snacks and drinks to keep you fueled while you have your eyes on the prize!
            </div>
          </Collapse>
        </div>
        <div className='Q4'>
          <div>Will Blockfest NYC offer travel scholarships to hackers?</div>
          <img src={addButton} alt='' className='addButton 4' onClick={this.toggle} />
        </div>
        <div className='collapse-container'>
          <Collapse isOpen={this.state.isOpen4}>
            <div className='A4'>
              The hackathon is free-of-charge thanks to our wonderful sponsors and partners. However, unfortunately, we will not be able to cover travel or other expenses for attendees.
            </div>
          </Collapse>
        </div>
        <div className='Q5'>
          <div>How many people can be on a team?</div>
          <img src={addButton} alt='' className='addButton 5' onClick={this.toggle} />
        </div>
        <div className='collapse-container'>
          <Collapse isOpen={this.state.isOpen5}>
            <div className='A5'>
              You can form teams of up to 4 people. There are no restrictions for team members, so you can team up with hackers of any country or experience level!
            </div>
          </Collapse>
        </div>
        <div className='Q6'>
          <div>What if I’ve never been to a hackathon or worked with blockchain technology before?</div>
          <img src={addButton} alt='' className='addButton 6' onClick={this.toggle} />
        </div>
        <div className='collapse-container'>
        <Collapse isOpen={this.state.isOpen6}>
            <div className='A6'>
              Not an issue at all! It’s recommended to have some level of programming experience but it’s not a hard and fast rule. We will have resources to help you in your hack: breakout sessions, mentors and tutorial/workshop links to our sponsors’ technologies before the event. All you need to do is be ready to meet a lot of people, keep an open mind and build for the future!
            </div>
          </Collapse>
        </div>
        <div className='Q7'>
          <div>Can I start working on my hack before the event?</div>
          <img src={addButton} alt='' className='addButton 7' onClick={this.toggle} />
        </div>
        <div className='collapse-container'>
          <Collapse isOpen={this.state.isOpen7}>
            <div className='A7'>
              No. In the interest of fairness, attendees should not be working on their projects before the hackathon begins. We also do not allow participants to work on pre-existing projects. However, you are open to familiarize yourself with the tools and technologies you intend to use beforehand!
            </div>
          </Collapse>
        </div>
      </>
      )
  }
}

export default FAQ;

