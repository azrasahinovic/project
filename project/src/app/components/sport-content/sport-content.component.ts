import { Component, OnInit, Input} from '@angular/core';
import { Sport } from 'src/app/Sport';
import { SportService } from 'src/app/services/sport.service';

@Component({
  selector: 'app-sport-content',
  templateUrl: './sport-content.component.html',
  styleUrls: ['./sport-content.component.scss']
})
export class SportContentComponent implements OnInit {
  sport!: Sport[];
  @Input() selectSport: any;

  constructor(private sportService: SportService) { }


  ngOnInit(): void {
  }

}
