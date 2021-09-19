import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { AllFilms, AllFilmVariables } from '../../schema/films';
const allSWFilms = gql`
    {
        allFilms {
            films {
                id
                title
                episodeID
            }
        }
    }
`;

export function SWFilms(): JSX.Element {
    const { loading, error, data } = useQuery<AllFilms, AllFilmVariables>(allSWFilms);
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error || !data) {
        return <p>Error :(</p>;
    }
    return (
        <>
            {data.allFilms.films.map(({ id, title, episodeID }, i) => (
                <div key={i}>
                    <p>
                        {episodeID} {title}
                    </p>
                </div>
            ))}
        </>
    );
}
