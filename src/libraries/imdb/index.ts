import axios from 'axios';
import { IMDbSearchData, IMDbSearchResult } from '../../schema/imdb';

// Vite env variables
// https://vitejs.dev/guide/env-and-mode.html#env-variables
const apiKey = import.meta.env.VITE_IMDB_API_KEY || '';

const IMDB_API_END_POINT = 'https://imdb-api.com/';

const imdbApiPath = (apiPath: string): string => `${IMDB_API_END_POINT}${apiPath}`;

export async function fetchPeople(keyWords: string[]): Promise<IMDbSearchResult[]> {
    const keyWordString = keyWords.join('%20');

    console.log(`search ${keyWordString} in IMDb....`);
    const data = await axiosGet<IMDbSearchData>(imdbApiPath(`API/SearchName/${apiKey}/${keyWordString}`));
    if (!data || !data.results) {
        return [];
    }
    return data.results;
}

async function axiosGet<T>(path: string): Promise<T | undefined> {
    try {
        const response = await axios.get(path);
        return response.data as T;
    } catch (error) {
        console.log('ERROR', error);
        return undefined;
    }
}
