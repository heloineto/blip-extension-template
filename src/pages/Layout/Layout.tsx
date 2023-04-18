import track from '@/lib/iframe-messages/track';
import { FeedbackFooter } from 'blip-feedback-footer';
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
        <div className="flex h-screen flex-col justify-between overflow-auto">
            <div className="container flex flex-col">
                <Header />
                <Outlet />
            </div>
            <FeedbackFooter className="mt-10" />
        </div>
    );
};

export default Layout;
