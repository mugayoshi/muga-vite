import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
}
export const BaseContainer: React.VFC<ContainerProps> = ({children}) => {
    return (
        <div className='container ml-5 mt-5'>
            {children}
        </div>
    )
}