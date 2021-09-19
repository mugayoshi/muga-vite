import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
} from '@apollo/client';
import React from 'react';
import './App.css';
import { SWFilms } from './components/star-wars-films';

const clientSW = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={clientSW}>
            <SWFilms />
        </ApolloProvider>
    );
}

export default App;
