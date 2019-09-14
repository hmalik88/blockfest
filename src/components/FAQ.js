import React from 'react';
import Collapsible from 'react-collapsible'
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

   handleClick = (pos) => {
    let num = 'isOpen' + pos;
    let keys = ['isOpen1', 'isOpen2', 'isOpen3', 'isOpen4', 'isOpen5', 'isOpen6', 'isOpen7'];
    let newKeys = keys.filter(el => el !== num);
    this.setState({[num]: !this.state[num]})
    newKeys.forEach(el => this.setState({[el]: false}))
  }

  render() {
    return(
      <>
        <img src={addButton} className='addButton1' alt='' />
        <Collapsible className='Q1' open={this.state.isOpen1} trigger='What is BlockFest NYC?' handleTriggerClick={this.handleClick} accordionPosition='1'>
          <div className='A1'>
            Blockfest NYC is an event bringing together some of the brightest minds and experts in the blockchain space in New York City. We enable teams to make something great in ~ 30 hours by providing an abundance of hacking resources like mentors, sponsors, and software. Sleeping is optional, but trying to make awesome things is not.
          </div>
        </Collapsible>
        <img src={addButton} className='addButton2' alt='' />
        <Collapsible className='Q2' open={this.state.isOpen2} trigger='Who can participate?' classParentString = 'Collapsible2' handleTriggerClick={this.handleClick} accordionPosition='2'>
          <div className='A2'>
            Anyone from anywhere in the world can join the hack. Applications are based on interest in blockchain technologies and proven ability to build! - whether that’s writing software, designing beautiful UXs, product management, or something else entirely.
          </div>
        </Collapsible>
        <img src={addButton} className='addButton3' alt='' />
        <Collapsible className='Q3' open={this.state.isOpen3} trigger='How much does it cost to attend?' classParentString = 'Collapsible3' handleTriggerClick={this.handleClick} accordionPosition='3'>
          <div className='A3'>
            Admission to Blockfest NYC is entirely free for hackers. We will be providing you with healthy meals, wifi, snacks and drinks to keep you fueled while you have your eyes on the prize!
          </div>
        </Collapsible>
        <img src={addButton} className='addButton4' alt='' />
        <Collapsible className='Q4' open={this.state.isOpen4} trigger='Will Blockfest NYC offer travel scholarships to hackers?' classParentString='Collapsible4' handleTriggerClick={this.handleClick} accordionPosition='4'>
          <div className='A4'>
            The hackathon is free-of-charge thanks to our wonderful sponsors and partners. However, unfortunately, we will not be able to cover travel or other expenses for attendees.
          </div>
        </Collapsible>
        <img src={addButton} className='addButton5' alt='' />
        <Collapsible className='Q5' open={this.state.isOpen5} trigger='How many people can be on a team?' classParentString='Collapsible5' handleTriggerClick={this.handleClick} accordionPosition='5'>
          <div className='A5'>
            You can form teams of up to 4 people. There are no restrictions for team members, so you can team up with hackers of any country or experience level!
          </div>
        </Collapsible>
        <img src={addButton} className='addButton6' alt='' />
        <Collapsible className='Q6' open={this.state.isOpen6} trigger='What if I’ve never been to a hackathon or worked with blockchain technology before?' classParentString='Collapsible6' handleTriggerClick={this.handleClick} accordionPosition='6'>
          <div className='A6'>
            Not an issue at all! It’s recommended to have some level of programming experience but it’s not a hard and fast rule. We will have resources to help you in your hack: breakout sessions, mentors and tutorial/workshop links to our sponsors’ technologies before the event. All you need to do is be ready to meet a lot of people, keep an open mind and build for the future!
          </div>
        </Collapsible>
        <img src={addButton} className='addButton7' alt='' />
        <Collapsible className='Q7' open={this.state.isOpen7} trigger='Can I start working on my hack before the event?' classParentString='Collapsible7' handleTriggerClick={this.handleClick} accordionPosition='7'>
          <div className='A7'>
            No. In the interest of fairness, attendees should not be working on their projects before the hackathon begins. We also do not allow participants to work on pre-existing projects. However, you are open to familiarize yourself with the tools and technologies you intend to use beforehand!
          </div>
        </Collapsible>
      </>
      )
  }
}

export default FAQ;

