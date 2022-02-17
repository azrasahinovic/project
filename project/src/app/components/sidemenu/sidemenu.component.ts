import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sport } from 'src/app/Sport';
import { SportService } from 'src/app/services/sport.service';
import { SharedService } from 'src/app/services/shared.service';

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

  constructor(private sportService: SportService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    //prvo dohvaćanje sportova u aplikaciji
    this.sportService.getSports().subscribe((sports) => {
       this.sports = sports;
       this.sharedService.setSports(sports)
    });
  }

  selected() {
    this.sharedService.setSelectedSport(this.selectedSport);
  }


}
