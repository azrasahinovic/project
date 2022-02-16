import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sport } from '../Sport';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _sports: Sport[] = [];
  getSports: any;

  constructor() { }

  setSport(sport: Sport) {
    this._sports.push(sport);
  }

  setSports(sports: Sport[]) {
    this._sports = sports;
  }

  getSport(): Sport[] {
    return this._sports;
  }
}
