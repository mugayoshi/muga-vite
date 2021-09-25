export interface IMDbSearchData {
    searchType:	string
    expression: string
    results?: IMDbSearchResult[];
    errorMessage?: string;
}

export interface IMDbSearchResult {
    id?: string;
    resultType?: string;
    image?: string;
    title?: string;
    description?: string;
}
