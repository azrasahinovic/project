import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Sport } from 'src/app/Sport';
import { SportService } from 'src/app/services/sport.service';
import { filter } from 'rxjs';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  sport!: Sport[];
  

  sports: Sport[] = [];
  @Output() select: EventEmitter<any> = new EventEmitter();

  constructor(private sportService: SportService) { }
  

  ngOnInit(): void {
    this.sportService.getSports().subscribe((sports) => (
      this.sports = sports.slice(0,5)));
  }

  onSelect(sport: any) {
    this.sports.forEach(sport => sport.active = false);
    sport.active = true;
    this.select.emit(sport);
    console.log(sport)
  }
}
