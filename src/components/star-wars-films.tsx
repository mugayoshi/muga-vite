import { gql, useQuery } from '@apollo/client';
import React from 'react';
const allSWFilms = gql`
    {
        allFilms {
            films {
                title
            }
        }
    }
`;
interface StarWarsFilm {
    title: string;
}
export function SWFilms(): JSX.Element {
    const { loading, error, data } = useQuery(allSWFilms);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const films = data.allFilms.films as StarWarsFilm[];
    return (
        <>
            {films.map(({ title }, i) => (
                <div key={i}>
                    <p>
                        {i}: {title}
                    </p>
                </div>
            ))}
        </>
    );
}
