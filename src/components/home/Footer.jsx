import logo from '../../assets/logo-footer.png';
import { animateScroll } from 'react-scroll';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterFill,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <footer className='bg-main-green p-5 mt-auto'>
      <div className='flex justify-between items-center'>
        <Link to={"/"}>
          <img
            src={logo}
            alt=''
          />
        </Link>
        <TopScroll />
        <div className='text-3xl flex justify-between gap-5 text-white'>
          <div>
            <a href='#'>
              <RiFacebookFill />
            </a>
          </div>
          <div>
            <a href='#'>
              <RiTwitterFill />
            </a>
          </div>
          <div>
            <a href='#'>
              <RiLinkedinFill />
            </a>
          </div>
          <div>
            <a href='#'>
              <RiInstagramLine />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function TopScroll() {
  const handleScroll = () => {
    animateScroll.scrollToTop({
      duration: 500,
    });
  };
  return (
    <button
      onClick={handleScroll}
      className=' bottom-24 right-5'
    >
      <HiOutlineChevronDoubleUp className='text-5xl text-white border-2 border-white rounded-full p-1 animate-bounce' />
    </button>
  );
}
