import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Sport } from '../Sport';



@Injectable({
  providedIn: 'root'
})
export class SportService {
 

  constructor(private http: HttpClient) { }


  apiCall() {
    return this.http.get('https://devmeta.multifeedcenter.com/Sport/all?_limit=5');
  }

  getSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>('https://devmeta.multifeedcenter.com/Sport/all?_limit=5');
  }

 

  
}
