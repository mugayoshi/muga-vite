import React from 'react';
import imgPath from '../assets/star-wars-backgrounds.jpeg';

interface DefaultLayoutProps {
    children: React.ReactNode;
}

export const DefaultLayout: React.VFC<DefaultLayoutProps> = ({ children }) => {
    // FIXME cannot fill all area for mobile view
    return (
        <div
            className='top-0 bg-fixed'
            style={{
                backgroundImage: `url(${imgPath})`,
                width: '100vw',
                minHeight: '100vh',
                backgroundSize: 'cover',
            }}
        >
            {children}
        </div>
    );
};
