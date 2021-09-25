import React from 'react';
import { BaseContainer } from '../components/base/BaseContainer';
import { StarWarsVehicleList } from '../components/vehicles/StarWarsVehicleList';

export const StarWarsVehicles: React.VFC = () => {
    return (
        <>
            <BaseContainer>
                <StarWarsVehicleList />
            </BaseContainer>
        </>
    );
};