import React from 'react';
import { fetchPeople } from '../../libraries/imdb';

interface FilmDetailProps {
    producers: string[];
}
const onClickProducer = async (director: string): Promise<void> => {
    console.log('onClickProducer');
    const result = await fetchPeople(director.split(' '));
    console.log(result);
};
export const StarWarsFilmDetail: React.VFC<FilmDetailProps> = ({producers}) => {
    return (
        <>
            <p className='mt-1'>producers</p>
            <ul>
                {producers.map((p, i) => (
                    <li className='mt-0 ml-5' key={i} onClick={async () => onClickProducer(p)}>
                        <button>{p}</button>
                    </li>
                ))}
            </ul>
        </>
    );
};
