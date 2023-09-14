import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import Loadable from '../ui-component/Loadable';
import ContactUsPage from '../views/pages/contact-us';

const PagesLanding = Loadable(lazy(() => import('../views/pages/landing')));

export default function ThemeRoutes() {
    return useRoutes([{ path: '/', element: <PagesLanding /> }, { path: '/contact', element: <ContactUsPage />, }]);
}

