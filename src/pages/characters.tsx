import React from 'react';
import { BaseContainer } from '../component/base/BaseContainer';
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
