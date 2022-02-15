export interface Sport {
    id: number;
    icon: string;
    name: string;
    active?: boolean;
}

export interface Category {
    id: number;
    sportID: string;
    name: string;
    country: ICountry;
  sourceCategories: ISourceCategory[];
  createdAt?: string;
  createdBy?: string;
  deleted?: boolean;
}

export interface ISourceCategory {
    categoryID: string;
    source: number;
    sourceCategoryID: string;
    sourceSportID: string;
    sourceCountryID: string;
    name: string;
    pairedAt?: string;
    pairedBy?: string;
  }

  export interface ICountry {
    id: string;
    name: string;
    sourceCountries: ISourceCountry[];
    createdAt?: string;
    createdBy?: string;
    deleted?: boolean;
  }

  export interface ISourceCountry {
    countryID: string;
    source: number;
    sourceCountryID: string;
    name: string;
    pairedAt?: string;
    pairedBy?: string;
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