import React, {VFC} from "react";
import '../../styles/star-wars.css';

export const NavFooter: VFC = () => {
    return (
        <>
            <footer className='fixed mx-3 left-0 bottom-0'>
                <div className='container mx-auto sw-opening-crawl'>
                    Copyright © 2021 Muga Yoshikawa
                </div>
            </footer>
        </>
    );
};