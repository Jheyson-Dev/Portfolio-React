import project1 from '../../assets/project-1.jpg';
import project2 from '../../assets/project-2.jpg';
import project3 from '../../assets/project-3.jpg';
import project4 from '../../assets/project-4.jpg';
import { GoMarkGithub } from 'react-icons/go';
import './RecentWorks.css';
import { useState } from 'react';
import { Element } from 'react-scroll';

export const RecentWorks = () => {
  const [works, setWorks] = useState([
    {
      id: 1,
      img: project1,
      label: 'PRODUCT LABEL',
      name: 'KIO TAPE',
    },
    {
      id: 2,
      img: project2,
      label: 'PRODUCT DESIGN',
      name: 'OSEN CLOCK',
    },
    {
      id: 3,
      img: project3,
      label: 'REBRAND',
      name: 'WATCH',
    },
    {
      id: 4,
      img: project4,
      label: 'UX UI',
      name: 'USE-LESS BRAND',
    },
  ]);
  return (
    <Element name='works'>
      <div className=' py-24 px-5 text-center sm:px-36 lg:container lg:mx-auto'>
        <div className='px-5 mb-20 '>
          <h2 className='text-5xl font-extralight uppercase tracking-wider'>
            Our Recent Works
          </h2>
          <p className='font-light text-md leading-relaxed text-gray-400 mt-5'>
            Crafting experiences and seeking to make the complex clear &
            beautiful.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4'>
          {works.map(el => {
            return (
              <div
                className='border-2 border-gray-200 rounded-md group'
                key={el.id}
              >
                <img
                  src={el.img}
                  alt=''
                  className='group-hover:filter'
                />
                <div className='px-10 grid grid-cols-1 gap-3 py-5 group-hover:translate-y-[-10%]'>
                  <span className='text-main-pink uppercase text-xl'>
                    {el.label}
                  </span>
                  <h3 className='uppercase text-2xl font-semibold'>
                    {el.name}
                  </h3>
                  <div className='font-medium text-lg flex justify-around sm:gap-2'>
                    <a
                      href='#'
                      className='view-link'
                    >
                      view project
                    </a>
                    <a
                      href='#'
                      className='view-link'
                    >
                      view source
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='mt-10 w-1/2 mx-auto lg:w-1/6'>
          <a
            href='#'
            className='border-2 border-gray-300 px-4 py-2  rounded-md text-black font-bold text-xl flex justify-evenly items-center hover:bg-black hover:text-white'
          >
            <GoMarkGithub className='text-4xl' />
            <span>More Works</span>
          </a>
        </div>
      </div>
    </Element>
  );
};
