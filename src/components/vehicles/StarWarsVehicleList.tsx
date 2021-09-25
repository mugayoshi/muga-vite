import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { AllVehicles, AllVehicleVariables } from '../../schema/vehicles';
import { GQLLoading } from '../base/Loading';
import '../../styles/star-wars.css';

const allVehicles = gql`
    {
        allVehicles {
            vehicles {
                name
                model
            }
        }
    }
`;

export const StarWarsVehicleList: React.VFC = () => {
    const { data, error, loading } = useQuery<AllVehicles, AllVehicleVariables>(
        allVehicles
    );
    if (loading) {
        return <GQLLoading />;
    }
    if (error || !data) {
        return <p className='text-red-700'>Error :(</p>;
    }
    return (
        <>
            {data.allVehicles.vehicles.map((v, i) => (
                <div>
                    <p className='sw-opening-crawl'>{v.name || ''}</p>
                </div>
            ))}
        </>
    );
};
