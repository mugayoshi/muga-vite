import React from 'react';
import imgPath from '../assets/space.jpeg';

interface DefaultLayoutProps {
    children: React.ReactNode;
}

export const DefaultLayout: React.VFC<DefaultLayoutProps> = ({ children }) => {
    // FIXME cannot fill all area for mobile view
    return (
        <div
            className='h-screen min-w-max top-0 bg-fixed bg-cover bg-repeat-y'
            style={{ backgroundImage: `url(${imgPath})` }}
        >
            {children}
        </div>
    );
};
