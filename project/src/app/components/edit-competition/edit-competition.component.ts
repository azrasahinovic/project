import { Component, Input, OnInit } from '@angular/core';
import { ISourceCompetition } from 'src/app/Sport';

@Component({
  selector: 'app-edit-competition',
  templateUrl: './edit-competition.component.html',
  styleUrls: ['./edit-competition.component.scss']
})
export class EditCompetitionComponent implements OnInit {
  @Input() selectedCompetition: any;
  sourceCompetitions!: ISourceCompetition[];

  constructor() { }

  ngOnInit(): void {
  }

}
