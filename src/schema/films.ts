interface FilmType {
    id: string;
    title?: string;
    episodeID?: string;
}
export interface AllFilmVariables {
    first?: number;
}
export interface AllFilms {
    allFilms: {
        films: FilmType[];
    }
}