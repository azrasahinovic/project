import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Sport } from 'src/app/Sport';
import { SportService } from 'src/app/services/sport.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  sport!: Sport[];

  sports: Sport[] = [];
  @Output() select: EventEmitter<any> = new EventEmitter();


  // sports: Array<{id: number; icon: string; name: string; }> = [
  //   {id: 1, icon: 'fa-futbol', name : 'Soccer'},
  //   {id: 2, icon: 'fa-basketball-ball', name : 'Basketball'},
  //   {id: 3, icon: 'fa-hockey-puck', name : 'Ice Hockey'},
  //   {id: 4, icon: 'fa-table-tennis', name : 'Tennis'},
  //   {id: 5, icon: 'fa-golf-ball', name : 'Golf'},
  //   {id: 6, icon: 'fa-volleyball-ball', name : 'Volleyball'}
  // ]

  constructor(private sportService: SportService) { }
  

  ngOnInit(): void {
    this.sportService.getSports().subscribe((sports) => (
      this.sports = sports.slice(0,10))
    );
  }

  onSelect(sport: any) {
    this.select.emit(sport);
    console.log(sport)
  }

}
