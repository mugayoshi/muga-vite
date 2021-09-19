import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { AllPeople, AllPeopleVariables } from '../../schema/people';
import { GQLLoading } from '../base/Loading';

const allCharacters = gql`
    {
        allPeople {
            people {
                id
                name
                gender
                species {
                    name
                    classification
                }
            }
        }
    }
`;

export const StarWarsCharactersList: React.VFC = () => {
    const { loading, error, data } = useQuery<AllPeople, AllPeopleVariables>(
        allCharacters
    );
    if (loading) {
        return <GQLLoading />;
    }
    if (error || !data) {
        return <p>Error :(</p>;
    }
    // console.log(data.allPeople.people);
    return (
        <>
            {data.allPeople.people.map((p, i) => (
                <div className='whitespace-pre' key={i}>
                    <p>{`${p.name || ''} ${p.species ? p.species.name : ''}`}</p>
                </div>
            ))}
        </>
    );
};
