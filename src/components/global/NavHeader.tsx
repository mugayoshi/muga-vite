import React, { VFC } from 'react';
import { Link } from 'react-router-dom';
import { SWPagePath } from '../../consts/PagePath';
import '../../styles/star-wars.css';

export const NavHeader: VFC = () => {
    const {Root, Films, Characters, Vehicles} = SWPagePath;
    return (
        <>
            <header className='top-0 mt-1 sticky flex flex-row sw-opening-crawl'>
                <Link to={Root} className='mx-2'>Home</Link>
                <Link to={Films} className='mx-2'>Films</Link>
                <Link to={Characters} className='mx-2'>Characters</Link>
                <Link to={Vehicles} className='mx-2'>Vehicles</Link>
            </header>
        </>
    );
};
