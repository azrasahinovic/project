import { Component, Input, OnInit } from '@angular/core';
import { ISourceCompetitor } from 'src/app/Sport';

@Component({
  selector: 'app-edit-competitor',
  templateUrl: './edit-competitor.component.html',
  styleUrls: ['./edit-competitor.component.scss']
})
export class EditCompetitorComponent implements OnInit {
  @Input() selectedCompetitor: any;
  sourceCompetitors!: ISourceCompetitor[];

  constructor() { }

  ngOnInit(): void {
  }

}
