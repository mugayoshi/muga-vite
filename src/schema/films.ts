interface FilmType {
    id: string;
    title?: string;
    episodeID?: string;
    director?: string;
    producers?: string[];
    releaseDate?: string;
}
export interface AllFilmVariables {
    first?: number;
}
export interface AllFilms {
    allFilms: {
        films: FilmType[];
    }
}