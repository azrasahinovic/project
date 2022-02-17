import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  selectedSport: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    
  }

  selSport(event: any) {
    this.selectedSport = event;
  }

}
