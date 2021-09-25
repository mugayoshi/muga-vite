import React, { useState } from 'react';
import { fetchPeople } from '../../libraries/imdb';
import { StarWarsFilmDetail } from './StarWarsFilmDetail';

interface FilmItemProps {
    episodeID: string;
    title: string;
    director: string;
    releaseDate: string;
    producers: string[];
}

export const StarWarsFilmItem: React.VFC<FilmItemProps> = ({
    episodeID,
    title,
    director,
    releaseDate,
    producers,
}) => {
    const [isShowDetail, setIsShowDetail] = useState(false);
    const onClickDirector = async (director: string): Promise<void> => {
        console.log('onClickDirector');
        const result = await fetchPeople(director.split(' '));
        console.log(result);
    };
    return (
        <div className='sw-opening-crawl text-lg mb-5 ml-5 md:ml-10'>
            <p style={{ fontSize: '1.5rem' }}>
                Episode {episodeID} {title}
            </p>
            <p>
                directed by{' '}
                <button  onClick={async () => onClickDirector(director)}>
                    {director}
                </button>
            </p>
            <p>released on {releaseDate}</p>
            <div>
                <button onClick={() => setIsShowDetail((prev) => !prev)}>
                    {/* TODO replace with UI library component */}
                    {isShowDetail ? '- hideDetail' : '+ showDetail'}
                </button>
            </div>
            {isShowDetail && <StarWarsFilmDetail producers={producers} />}
        </div>
    );
};
