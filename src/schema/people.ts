interface PersonType {
    id: string;
    name?: string;
    species?: {
        name?: string;
        classification?: string;
    }
}

export interface AllPeopleVariables {
    first?: number;
}

export interface AllPeople {
    allPeople: {
        people: PersonType[];
    }
}