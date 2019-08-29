import React from 'react';
import NavBar from '../components/NavBar'
import FAQ from '../components/FAQ'
import '../scss/Home.scss';

class Home extends React.Component {

  componentDidMount() {
    let root = document.querySelector('#root');
    root.classList.add('home-root');
  }

  componentWillUnmount() {
    let root = document.querySelector('#root');
    root.classList.remove('home-root');
  }

  render() {
    return(
      <>
        <NavBar />
        Hello World!
        <FAQ />
      </>
      )
  }
}

export default Home;
