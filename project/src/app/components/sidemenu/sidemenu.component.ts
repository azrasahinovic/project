import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Sport } from 'src/app/Sport';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  id: any;
  sport!: Sport[];
  icon!: Sport[];
  name!: Sport[];
  @Output() select: EventEmitter<string> = new EventEmitter();

  // sports: Array<{id: number; icon: string; name: string; }> = [
  //   {id: 1, icon: 'fa-futbol', name : 'Soccer'},
  //   {id: 2, icon: 'fa-basketball-ball', name : 'Basketball'},
  //   {id: 3, icon: 'fa-hockey-puck', name : 'Ice Hockey'},
  //   {id: 4, icon: 'fa-table-tennis', name : 'Tennis'},
  //   {id: 5, icon: 'fa-golf-ball', name : 'Golf'},
  //   {id: 6, icon: 'fa-volleyball-ball', name : 'Volleyball'}
  // ]

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(sport: any) {
    this.select.emit(sport);
    console.log(sport)

  }

}
