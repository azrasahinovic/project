import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  // check if token expired
  const token = localStorage.getItem('mfcToken');
  if (token) {
      // add authorization header with jwt token if available
      request = request.clone({
          setHeaders: {
              Authorization: `Bearer ${token}`
          }
      });
  }
    return next.handle(request);
  }
}
