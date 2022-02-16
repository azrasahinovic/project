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
  id: string;
  name: string;
  sportID: string;
  categoryID: string;
  sourceCompetitions: ISourceCompetition[];
  createdAt?: string;
  createdBy?: string;
  lastCheckedBy?: string;
  lastCheck?: string;
  deleted?: boolean;
}

export interface ISourceCompetition {
  competitionID: string;
  source: number;
  sourceCompetitionID: string;
  sourceSportID: string;
  sourceCategoryID: string;
  currentSourceSeasonID: string;
  name: string;
  pairedAt?: string;
  pairedBy?: string;
}

export interface ICompetitionTranslation {
  competitionID: string;
  languageID: string;
  value: string;
}

export interface Competitor {
  id: string;
  name: string;
  sportID: string;
  countryID: string;
  country: ICountry;
  sourceCompetitors: ISourceCompetitor[];
  translations: ICompetitorTranslation[];
  createdAt?: string;
  createdBy?: string;
  lastCheckedBy?: string;
  lastCheck?: string;
  deleted?: boolean;
}

export interface ICompetitorTranslation {
  competitorID: string;
  languageID: string;
  value: string;
}


export interface ISourceCompetitor {
  competitorID: string;
  source: number;
  sourceCompetitorID: string;
  name: string;
  sourceSportID: string;
  sourceCountryID: string;
  pairedAt?: string;
  pairedBy?: string;
}

export interface Player {
    id: number;
    competitorID: string;
    name: string;
}