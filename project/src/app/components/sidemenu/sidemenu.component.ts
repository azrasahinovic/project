import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sport } from 'src/app/Sport';
import { SportService } from 'src/app/services/sport.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  sport!: Sport[];
  sports!: Sport[];
  selectedSport!: any;

  @Output() select: EventEmitter<any> = new EventEmitter();

  constructor(private sportService: SportService) { }

  ngOnInit(): void {
    this.sportService.getSports().subscribe((sports) => (
      this.sports = sports));
      
      
  }

  selected() {
    this.select.emit(this.selectedSport);
  }


}
