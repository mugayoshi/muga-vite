import React from 'react';
import { BaseContainer } from '../component/base/BaseContainer';

export const RootPage: React.VFC = () => {
    return (
        <div className='bg-blue-300'>
            <BaseContainer>
                <h1>Welcome to Muga's Star Wars page!!</h1>
            </BaseContainer>
        </div>
    );
};
