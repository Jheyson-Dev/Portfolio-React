import { Link, Outlet } from 'react-router-dom';
import { Link as NavigateTo, Element } from 'react-scroll';
import './App.css';
import logo from './assets/logo.png';
import { Fade } from 'hamburger-react';
import { useRef, useState } from 'react';
import { Footer } from './components/home/Footer';

function App() {
  return (
    <div className=' relative flex flex-col min-h-screen '>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
function Header() {
  const [isOpen, setOpen] = useState(false);
  const nav = useRef();
  const handleNav = () => {
    setOpen(!isOpen);
  };

  return (
    <Element name='home'>
      <header className='fixed bg-white top-0 left-0 right-0 m-2 rounded-md z-10 px-4 py-2 sm:px-32 lg:m-0 lg:rounded-none lg:shadow-md'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <Link to={'/'}>
              <img
                src={logo}
                alt=''
              />
            </Link>
          </div>
          <div className='hidden lg:block  h-12 '>
            <nav>
              <ul className=' font-light flex  gap-5 items-center'>
                <li className='group'>
                  <Link
                    to='/'
                    className='nav-link cursor-pointer'
                  >
                    Home
                  </Link>
                </li>
                <li className='group '>
                  <NavigateTo
                    to='about'
                    smooth={true}
                    duration={500}
                    className='nav-link cursor-pointer'
                  >
                    About
                  </NavigateTo>
                </li>
                <li className='group '>
                  <NavigateTo
                    to='works'
                    smooth={true}
                    duration={500}
                    className='nav-link cursor-pointer'
                  >
                    Recent Works
                  </NavigateTo>
                </li>
                <li className='group '>
                  <NavigateTo
                    to='testimonials'
                    smooth={true}
                    duration={500}
                    className='nav-link cursor-pointer'
                  >
                    Testimonials
                  </NavigateTo>
                </li>
                <li>
                  <Link
                    to={'/contact'}
                    className='bg-main-pink hover:bg-secondary-pink block py-2 px-4 rounded-md text-white font-bold'
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='lg:hidden'>
            <Fade
              toggled={isOpen}
              toggle={setOpen}
              color='#fdc1bf'
            />
          </div>
        </div>
        <div className='overflow-hidden'>
          <div
            className='transition-height'
            ref={nav}
            style={{ height: isOpen ? nav.current.scrollHeight + 'px' : 0 }}
          >
            <ul className='grid grid-cols-1 text-center gap-8 font-light'>
              <li className='group'>
                <NavigateTo
                  to='home'
                  smooth={true}
                  duration={500}
                  onClick={handleNav}
                  className='nav-link cursor-pointer'
                >
                  Home
                </NavigateTo>
              </li>
              <li className='group '>
                <NavigateTo
                  to='about'
                  smooth={true}
                  duration={500}
                  onClick={handleNav}
                  className='nav-link cursor-pointer'
                >
                  About
                </NavigateTo>
              </li>
              <li className='group '>
                <NavigateTo
                  to='works'
                  smooth={true}
                  duration={500}
                  onClick={handleNav}
                  className='nav-link cursor-pointer'
                >
                  Recent Works
                </NavigateTo>
              </li>
              <li className='group '>
                <NavigateTo
                  to='testimonials'
                  smooth={true}
                  duration={500}
                  onClick={handleNav}
                  className='nav-link cursor-pointer'
                >
                  Testimonials
                </NavigateTo>
              </li>
              <li>
                <Link
                  to={'/contact'}
                  onClick={handleNav}
                  className='bg-main-pink hover:bg-secondary-pink block py-4 rounded-full text-white font-bold'
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Element>
  );
}

export default App;
