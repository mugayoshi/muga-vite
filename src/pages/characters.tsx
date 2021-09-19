import React from 'react';
import { BaseContainer } from '../components/base/BaseContainer';
import { StarWarsCharactersList } from '../components/characters/StarWarsCharacterList';

export const StarWarsCharactersPage: React.VFC = () => {
    return (
        <>
            <BaseContainer>
                <StarWarsCharactersList />
            </BaseContainer>
        </>
    );
};
