import { Element } from 'react-scroll';

import './About.css';
export const About = () => {
  return (
    <Element name='about'>
      <div className='bg-main-green'>
        <div className=' text-white text-center py-20 px-5 sm:px-36 lg:container lg:mx-auto'>
          <h2 className='text-5xl font-extralight tracking-wider leading-tight'>
            THE PROOF IS IN THE PUDDING!
          </h2>
          <div className='grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:container'>
            <div className='container-info'>
              <span className='info-title'>Happy Clients</span>
              <span className='info-data'>253+</span>
            </div>
            <div className='container-info'>
              <span className='info-title'>Projects Completed</span>
              <span className='info-data'>111+</span>
            </div>
            <div className='container-info'>
              <span className='info-title'>Cups of coffee</span>
              <span className='info-data'>351+</span>
            </div>
            <div className='container-info'>
              <span className='info-title'>Telephone Talks</span>
              <span className='info-data'>740+</span>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
