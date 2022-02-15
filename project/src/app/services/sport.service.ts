import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Competitor, Sport } from '../Sport';
import { Category } from '../Sport';
import { Competition } from '../Sport';
import { Player } from '../Sport';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private http: HttpClient) { }

  apiCall() {
    return this.http.get('https://devmeta.multifeedcenter.com/Sport/all');
  }

  getSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>('https://devmeta.multifeedcenter.com/Sport/all');
  }
  
  getCategoriesForSport(sportID: any): Observable<Category[]> {
    return this.http.get<Category[]>(`https://devmeta.multifeedcenter.com/Category/sport/${sportID}?icludeSources=true`)  
    
  }

  getCompetitionsForCategories(categoryID: any): Observable<Competition[]> {
    return this.http.get<Competition[]>(`https://devmeta.multifeedcenter.com/Competition/category/${categoryID}`)
  }

  getCompetitorsForCompetitions(competitionID: any): Observable<Competitor[]> {
    return this.http.get<Competitor[]>(`https://devmeta.multifeedcenter.com/Competitor/competition/${competitionID}`)
  }
  
  getPlayersForCompetitors(competitorID: any): Observable<Player[]> {
    return this.http.get<Player[]>(`https://devmeta.multifeedcenter.com/Player/competitor/${competitorID}`)
  }

  editCategory(category: Category): Observable<Category>  {
    const url = (`https://devmeta.multifeedcenter.com/Category/update/`);
    return this.http.put<Category>(url, category, httpOptions);
  }

  editCompetition(competition: Competition): Observable<Competition>  {
    const url = `https://devmeta.multifeedcenter.com/Competition/update/`;
    return this.http.put<Competition>(url, competition, httpOptions);
  }

  editCompetitor(competitor: Competitor): Observable<Competitor>  {
    const url = `https://devmeta.multifeedcenter.com/Competitor/update/`;
    return this.http.put<Competitor>(url, competitor, httpOptions);
  }
}


