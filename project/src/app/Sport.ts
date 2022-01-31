export interface Sport {
    id: number;
    icon: string;
    name: string;
    active: boolean;
}

export interface Category {
    id: number;
    sportID: string;
    name: string;
}

export interface Competition {
    id: number;
    categoryID: string;
    name: string;
}

export interface Competitor {
    id: number;
    competitionID: string;
    name: string;
}

export interface Player {
    id: number;
    competitorID: string;
    name: string;
}