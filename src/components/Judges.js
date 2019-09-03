import React from 'react';
import HeadShot from './HeadShot';
import judges from '../assets/judges.svg';
import '../scss/Judges.scss';
import emily from '../assets/judge-emily.jpeg';
import mahesh from '../assets/judge-mahesh.jpg';
import rick from '../assets/judge-rick.jpeg';
import allison from '../assets/speaker-allison.jpg';
import jake from '../assets/speaker-jake.jpg';
import luke from '../assets/speaker-luke.jpg';
import ross from '../assets/speaker-ross.jpg';

const judgeList = [
['Jake Brukhman', 'CoinFund', jake],
['Emily Williams', 'Level K', emily],
['Mahesh Murthy', 'Zastrin', mahesh],
['Allison Lu', 'UMA', allison],
['Luke Duncan', 'Aragon', luke],
['Rick Dudley', 'Vulcanize', rick],
['Ross Campbell', 'OpenLaw', ross],
]

class Judges extends React.Component {

  renderJudges = () => {
    return judgeList.map(el => {
      return <HeadShot key={el[0]} name={el[0]} job={el[1]} image={el[2]} />
    })
  }

  render() {
    return(
    <>
      <div className='judges-svg-container'>
        <img src={judges} alt ='' />
      </div>
      <div className='judges-profiles'>
        <div className='judge-faces'>
          {this.renderJudges()}
        </div>
      </div>
    </>
    )
  }
}

export default Judges;
