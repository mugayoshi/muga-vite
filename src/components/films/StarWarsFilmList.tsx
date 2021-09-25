import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { AllFilms, AllFilmVariables } from '../../schema/films';
import '../../styles/star-wars.css';
import { GQLLoading } from '../base/Loading';
import { StarWarsFilmItem } from './StarWarsFilmItem';

const allSWFilms = gql`
    {
        allFilms {
            films {
                id
                title
                episodeID
                director
                producers
                releaseDate
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
            {data.allFilms.films.map(({ id, title, episodeID, director, releaseDate, producers }, i) => (
                <StarWarsFilmItem
                    key={i}
                    director={director || ''}
                    episodeID={episodeID || ''}
                    title={title || ''}
                    producers={producers || []}
                    releaseDate={releaseDate || ''}
                />
            ))}
        </>
    );
}
