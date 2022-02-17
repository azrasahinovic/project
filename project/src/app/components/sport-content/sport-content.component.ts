import { Component, OnInit, Input } from '@angular/core';
import { Category, Sport } from 'src/app/Sport';
import { SportService } from 'src/app/services/sport.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sport-content',
  templateUrl: './sport-content.component.html',
  styleUrls: ['./sport-content.component.scss']
})
export class SportContentComponent implements OnInit {
   selectedSport: any;

  constructor(private sportService: SportService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getSelectedSport().subscribe(
      response => this.selectedSport = response
    )
  }

}
