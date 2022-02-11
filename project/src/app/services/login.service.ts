import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User{
    username: string;
    password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor(private http: HttpClient) { }


  login(user: User): Observable<any>{
    return this.http.post<any>('http://identity.multifeedcenter.com/api/Authenticate', user);
  }
}
