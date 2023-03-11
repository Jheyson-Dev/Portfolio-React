import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { Link as NavigateTo } from 'react-scroll';
import { About } from './About';
import './Home.css';
import { RecentWorks } from './RecentWorks';
import { Testimonials } from './Testimonials';
export const Home = () => {
  return (
    <>
      <div className='banner flex items-center relative '>
        <div className=' px-8 text-center sm:container mx-auto sm:px-36'>
          <div>
            <span className='font-extralight text-lg'>
              WE WORK HARD, WE PLAY HARD
            </span>
            <h1 className='font-semibold text-3xl'>
              We’re a Design Studio That Believes In Great Ideas
            </h1>
          </div>
          <div className='grid grid-cols-1 gap-5 mt-20 sm:grid-cols-2 lg:place-items-center'>
            <button className='bg-main-green buttons justify-self-end'>
              See our Works
            </button>
            <button className='bg-main-pink buttons justify-self-start'>
              Conect with us
            </button>
          </div>
        </div>
        <NavigateTo
          to='about'
          smooth={true}
          duration={500}
          className='absolute bottom-5 right-1/2 translate-x-1/2 text-5xl'
        >
          <HiOutlineArrowNarrowDown />
        </NavigateTo>
      </div>
      <About />
      <RecentWorks />
      <Testimonials />
    </>
  );
};
