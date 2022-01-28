import { Component, OnInit } from '@angular/core';
import { SportService } from 'src/app/services/sport.service';
import { Sport } from 'src/app/Sport';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  sport: Sport[] = [];
  sports!: Sport;
  message: any;
  selectedSport: any;
 

  constructor(private sportService: SportService) { 
  }

  ngOnInit(): void {
  
  }

  selectSport(event: any) {
    this.selectedSport = event;
   
  }



}
