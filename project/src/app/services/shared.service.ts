import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Category, Competition, Competitor, Player, Sport } from '../Sport';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _sports: Sport[] = [];
  private _categories: Category[] = [];
  private _competitions: Competition[] = [];
  private _competitors: Competitor[] = [];
  private _players: Player[] = [];
  private selectedSport = new Subject<Sport>();
  private selectedCategory = new Subject<Category>();
  private selectedCompetition = new Subject<Competition>();
  private selectedCompetitor = new Subject<Competitor>();

  constructor() { }

  // setSport(sport: Sport) {
  //   this._sports.push(sport);
  // }

  //all sports - sidemenu
  setSports(sports: Sport[]) {
    this._sports = sports;
  }

  getSports(): Sport[] {
    return this._sports;
  }

  //selectedSport
  setSelectedSport(sport: Sport) {
    this.selectedSport.next(sport);
  }
  getSelectedSport(): Observable<Sport> {
    return this.selectedSport.asObservable();
  }

  //categories
  setCategories(categories: Category[]) {
    this._categories = categories;
  }
  getCategories(): Category[] {
    return this._categories;
  }

  //selectedCategory
  setSelectedCategory(category: Category) {
    this.selectedCategory.next(category);
  }
  getSelectedCategory(): Observable<Category> {
    return this.selectedCategory.asObservable();
  }

  //competitions
  setCompetitions(competitions: Competition[]) {
    this._competitions = competitions;
  }
  getCompetitions():Competition[] {
    return this._competitions;

 }
  //selectedCompetition
  setSelectedCompetition(competition: Competition) {
    this.selectedCompetition.next(competition);
  }
  getSelectedCompetition(): Observable<Competition> {
    return this.selectedCompetition.asObservable();
  }

  //competitors
  setCompetitors(competitors: Competitor[]) {
    this._competitors = competitors;
  }
  getCompetitors(): Competitor[] {
    return this._competitors;
  }

  //selectedCompetitors
  setSelectedCompetitor(competitor: Competitor) {
    this.selectedCompetitor.next(competitor);
  }
  getSelectedCompetitor(): Observable<Competitor> {
    return this.selectedCompetitor.asObservable();
  }

  //players
  setPlayers(players: Player[]) {
    this._players = players;
  }
  getPlayers(): Player[] {
    return this._players;
  }

}
