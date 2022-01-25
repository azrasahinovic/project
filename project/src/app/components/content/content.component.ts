import { Component, OnInit } from '@angular/core';
import { SportService } from 'src/app/services/sport.service';
import { Sport } from 'src/app/Sport';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  item: Sport[] = [];
  sports!: Sport;
  sport!: Sport[];

  constructor(private sportService: SportService) { 
  }

  ngOnInit(): void {
   this.sportService.apiCall().subscribe((data) => {
     console.log('get api data', data);
   });
  }

 showItem(): void {
   this.item = this.item; 

 }



}
