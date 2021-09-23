import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { NavFooter } from './components/global/NavFooter';
import { NavHeader } from './components/global/NavHeader';
import { SWPagePath } from './consts/PagePath';
import { DefaultLayout } from './layout/default';
import { RootPage } from './pages';
import { StarWarsCharactersPage } from './pages/characters';
import { StarWarsFilmsPage } from './pages/films';
import { StarWarsVehicles } from './pages/vehicles';

const clientSW = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache(),
});

function App() {
    const { Root, Films, Characters, Vehicles } = SWPagePath;
    return (
        <DefaultLayout>
            <ApolloProvider client={clientSW}>
                <BrowserRouter>
                    <NavHeader />
                    <Switch>
                        <Route exact path={Root}>
                            <RootPage />
                        </Route>
                        <Route path={Films}>
                            <StarWarsFilmsPage />
                        </Route>
                        <Route path={Characters}>
                            <StarWarsCharactersPage />
                        </Route>
                        <Route path={Vehicles}>
                            <StarWarsVehicles />
                        </Route>
                    </Switch>
                    <NavFooter />
                </BrowserRouter>
            </ApolloProvider>
        </DefaultLayout>
    );
}

export default App;
