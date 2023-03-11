import { useState } from 'react';
import people1 from '../../assets/people-1.jpg';
import people2 from '../../assets/people-2.jpg';
import people3 from '../../assets/people-3.jpg';
import people4 from '../../assets/people-4.jpg';
import people5 from '../../assets/people-5.jpg';
import people6 from '../../assets/people-6.jpg';
import { Element } from 'react-scroll';
import './Testimonials.css';

export const Testimonials = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      img: people1,
      name: 'Simonns Hodge',
      cargo: 'CEO, Credito',
      descripcion:
        'Trust us we looked for a very long time and wasted thousands of dollars testing other teams, freelancers, and outsource companies.',
    },
    {
      id: 2,
      img: people2,
      name: 'Rekon Montino',
      cargo: 'CDO, Bulmuci',
      descripcion:
        'Roxo products have allowed us to deliver better support to all our clients. The agility with which we can implement new features and workflows is a key element.',
    },
    {
      id: 3,
      img: people3,
      name: 'Ryan Hillary',
      cargo: 'MD, Udilamo',
      descripcion:
        'We’re a really busy restaurant, and roxo gives our customers a easy way to order, pay, and pick up their food so they can beat the line and beat that lunch rush.',
    },
    {
      id: 4,
      img: people4,
      name: 'Dockrel Kahn',
      cargo: 'PM, Walmet',
      descripcion:
        'Trust us we looked for a very long time and wasted thousands of dollars testing other teams, freelancers, and outsource companies.',
    },
    {
      id: 5,
      img: people5,
      name: 'Orino Monteno',
      cargo: 'CEO, Axion',
      descripcion:
        'Roxo products have allowed us to deliver better support to all our clients. The agility with which we can implement new features and workflows is a key element.',
    },
    {
      id: 6,
      img: people6,
      name: 'Welfo Roy',
      cargo: 'PDO, Komoyo',
      descripcion:
        'We’re a really busy restaurant, and roxo gives our customers a easy way to order, pay, and pick up their food so they can beat the line and beat that lunch rush.',
    },
  ]);

  return (
    <Element name='testimonials'>
      <div className='px-5 mb-10 lg:container lg:mx-auto'>
        <div className='text-center py-5'>
          <h2 className='text-5xl font-extralight uppercase tracking-wider mb-5'>
            Testimonials
          </h2>
          <span className='font-light text-md leading-relaxed text-gray-400'>
            What Clients says about our services
          </span>
        </div>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {users.map(el => {
            return (
              <div
                className={`p-5 border-2 border-gray-200 rounded-md hover:shadow-md hover:shadow-main-pink
                }`}
                key={el.id}
              >
                <div className='flex'>
                  <img
                    src={el.img}
                    alt='People 1'
                  />
                  <div className='flex flex-col justify-center px-4'>
                    <span className='font-semibold'>{el.name}</span>
                    <span className='text-gray-500'>{el.cargo}</span>
                  </div>
                </div>
                <div className='mt-5 font-extralight text-lg'>
                  <p>{el.descripcion}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Element>
  );
};
