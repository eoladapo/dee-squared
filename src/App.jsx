import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Consultancy from './pages/Consultancy';
import EventManagement from './pages/EventManagement';
import SupplyChain from './pages/SupplyChain';
import ImportExport from './pages/ImportExport';
import RealEstate from './pages/RealEstate';
import ICTMedia from './pages/ICTMedia';
import GeneralContracts from './pages/GeneralContracts';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'services/consultancy',
        element: <Consultancy />,
      },
      {
        path: 'services/event-management',
        element: <EventManagement />,
      },
      {
        path: 'services/supply-chain',
        element: <SupplyChain />,
      },
      {
        path: 'services/import-export',
        element: <ImportExport />,
      },
      {
        path: 'services/real-estate',
        element: <RealEstate />,
      },
      {
        path: 'services/ict-media',
        element: <ICTMedia />,
      },
      {
        path: 'services/general-contracts',
        element: <GeneralContracts />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
