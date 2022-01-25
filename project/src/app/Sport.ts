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