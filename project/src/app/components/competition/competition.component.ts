import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { SportService } from 'src/app/services/sport.service';
import { Competition, Player } from 'src/app/Sport';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {
  competitions!: Competition[];
  selectedCompetition: any;
  selectedCategory: any;

  display: boolean = false;

  selectedEditType = '';
  selectedCompetitor: any;
  players!: Player[];

  constructor(private sportService: SportService, 
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getSelectedSport().subscribe(
      (response) => {
        this.selectedCompetition = null;
        this.competitions = [];

      })
    this.sharedService.getSelectedCategory().subscribe(
      (response) => {
        this.selectedCategory = response;
        this.getComptt()
      })
  }

  getComptt() {
    this.sportService.getCompetitionsForCategories(this.selectedCategory.id).subscribe(
      (competitions) => {
      this.competitions = competitions;
      this.sharedService.setCompetitions(competitions);
      })
     if (this.selectedCategory) {
        this.selectedCompetition = null;
      }
  }

  selectCompetition() {
    this.sharedService.setSelectedCompetition(this.selectedCompetition);
  }

  showDialog(type: string) {
    this.selectedEditType = type;
    this.display = true;
}

close() { 
  this.display = false;
}

save() {
  if(this.selectedEditType === 'competition') {
    this.sportService.editCompetition(this.selectedCompetition)
    .subscribe(response => 
      this.selectedCompetition = response
    );
    this.selectedEditType = '';
  }
}

}
