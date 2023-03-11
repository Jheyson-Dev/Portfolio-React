import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Contact } from './components/contact/Contact';
import { Home } from './components/home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);
