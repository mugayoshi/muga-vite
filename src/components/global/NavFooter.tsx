import React, {VFC} from "react";

export const NavFooter: VFC = () => {
    return (
        <>
            <footer className='fixed mx-3 left-0 bottom-0'>
                <div className='container mx-auto text-black'>
                    Copyright © 2021 Muga Yoshikawa
                </div>
            </footer>
        </>
    );
};