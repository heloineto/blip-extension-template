import getHasPermission from '@/lib/iframe-messages/getHasPermission';
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

    useEffect(() => {
        getHasPermission('write', 'team')
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="flex h-screen flex-col overflow-auto px-10">
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;
