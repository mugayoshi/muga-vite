import React from 'react';
import '../../styles/loading.css';

export const GQLLoading: React.VFC = () => {
    return (
        <div className='flex flex-row'>
            <div className='lds-dual-ring'></div>
            <div className='mt-1'>
                <p>Loading ....</p>
            </div>
        </div>
    );
};
