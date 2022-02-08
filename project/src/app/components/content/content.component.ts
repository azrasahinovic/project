import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  selectedSport: any;

  constructor() { }

  ngOnInit(): void {
  }

  selSport(event: any) {
    this.selectedSport = event;
  }

}
