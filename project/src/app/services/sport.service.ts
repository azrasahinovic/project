import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Sport } from '../Sport';
import { Category } from '../Sport';



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
    return this.http.get<Category[]>(`https://devmeta.multifeedcenter.com/Category/sport/${sportID}`)
  }
}
