import React from 'react';
import { BaseContainer } from '../components/base/BaseContainer';

export const RootPage: React.VFC = () => {
    return (
        <div>
            <BaseContainer>
                {/*  R: 75 G: 213 B: 238 */}
                <div className='flex justify-center mt-52'>
                    <div>
                        <h1
                            className='text-2xl md:text-3xl left-1/4 md:right-1/2 top-1/2'
                            style={{
                                color: 'rgb(75, 213, 238)',
                                fontFamily: `'Libre Franklin', sans-serif`,
                            }}
                        >
                            Welcome to<br />Muga's Star Wars page ...
                        </h1>
                    </div>
                </div>
            </BaseContainer>
        </div>
    );
};
