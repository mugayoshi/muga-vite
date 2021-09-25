import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { AllFilms, AllFilmVariables } from '../../schema/films';
import '../../styles/star-wars.css';
import { GQLLoading } from '../base/Loading';

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
        return <GQLLoading />;
    }
    if (error || !data) {
        return <p className='text-red-700'>Error :(</p>;
    }
    return (
        <>
            {data.allFilms.films.map(({ id, title, episodeID }, i) => (
                <div key={i}>
                    <p className='sw-opening-crawl'>
                        {episodeID} {title}
                    </p>
                </div>
            ))}
        </>
    );
}
