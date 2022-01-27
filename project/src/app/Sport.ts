export interface Sport {
    id: number;
    icon: string;
    name: string;
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
    categoryID: string;
    name: string;
}