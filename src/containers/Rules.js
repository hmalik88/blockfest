import React from 'react';
import '../scss/Rules.scss';

class Rules extends React.Component {

  componentDidMount() {
    let root = document.querySelector('#root');
    root.classList.add('rules-root');
  }

  componentWillUnmount() {
    let root = document.querySelector('#root');
    root.classList.remove('rules-root');
  }


  render() {
    return(
      <>
        Rules, rules, rules!
      </>
      )
  }
}

export default Rules;
