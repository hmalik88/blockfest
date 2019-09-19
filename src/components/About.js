import React from 'react';
import '../scss/About.scss';

function About() {

    return(
      <>
      <div className='about-headline'>
        <h1 className='headline-text'>
        Hack in the City that Never Sleeps
        </h1>
      </div>
      <div className='about-text'>
        <p className='about-paragraph'>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; This December, 150 of the most talented developers from around the world will descend on the preeminent capital of Finance, Real Estate and Art to reimagine a world built with Web 3.0. Located in the heart of Times Square New York City, BlockFest provides a platform for developers to let their creativity run wild and choose the blockchain platform of their choice to push the boundaries of industry. Apply to hack today, seats are limited.
        </p>
        <p className='about-paragraph-mobile'>
        This December, 150 of the most talented developers from around the world will descend on the preeminent capital of Finance, Real Estate and Art to reimagine a world built with Web 3.0. Located in the heart of Times Square New York City, BlockFest provides a platform for developers to let their creativity run wild and choose the blockchain platform of their choice to push the boundaries of industry. Apply to hack today, seats are limited.
        </p>
      </div>
      </>
      )
}

export default About;
