import track from '@/lib/iframe-messages/track';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        void track('page-opened', {
            pathname: location.pathname,
            state: location.state,
        });
    }, [location]);

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;
