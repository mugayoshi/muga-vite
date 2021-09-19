import React from 'react';
import { BaseContainer } from '../components/base/BaseContainer';
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
