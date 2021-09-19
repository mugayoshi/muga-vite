import React from 'react';
import { BaseContainer } from '../component/base/BaseContainer';
import { SWFilms } from '../components/films/StarWarsFilmList';

export const StarWarsFilmsPage: React.VFC = () => {
    return (
        <>
            <BaseContainer>
                <SWFilms />
            </BaseContainer>
        </>
    );
};
