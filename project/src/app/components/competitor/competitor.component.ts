import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { SportService } from 'src/app/services/sport.service';
import { Competitor, Player } from 'src/app/Sport';

@Component({
  selector: 'app-competitor',
  templateUrl: './competitor.component.html',
  styleUrls: ['./competitor.component.scss']
})
export class CompetitorComponent implements OnInit {
  players!: Player[];
  competitors!: Competitor[];
  selectedCompetitor: any;
  selectedCompetition: any;

  display: boolean = false;

  selectedEditType = '';

  isLoading: boolean = false;


  constructor(private sportService: SportService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getSelectedSport().subscribe(
      (response) => {
        this.selectedCompetitor = null;
        this.competitors = [];

      })
      this.sharedService.getSelectedCategory().subscribe(
        (response) => {
          this.selectedCompetitor = null;
          this.competitors = [];
  
        })
    this.sharedService.getSelectedCompetition().subscribe(
      (response) => {
        this.selectedCompetition = response;
        this.getComptr();
      
        
      }
    )
  }

  getComptr() {
    this.sportService.getCompetitorsForCompetitions(this.selectedCompetition.id).subscribe (
      (competitors) => {
        this.competitors = competitors;
        this.sharedService.setCompetitors(competitors);
      })
      if (this.selectedCompetition) {
        this.selectedCompetitor = null;
        this.players = [];
      }
    }

    getPlay() {
      this.sportService.getPlayersForCompetitors(this.selectedCompetitor.id).subscribe(
        (players) => {
          this.isLoading = true;
          this.players = players;
           this.isLoading = false;
          this.sharedService.setPlayers(players);
        }
      )
    }

    selectCompetitor() {
      this.sharedService.setSelectedCompetitor(this.selectedCompetitor);
      this.getPlay();
     


    }

    showDialog(type: string) {
      this.selectedEditType = type;
      this.display = true;
  }

  close() { 
    this.display = false;
  }

  save() {
    if(this.selectedEditType === 'competitor') {
      this.sportService.editCompetitor(this.selectedCompetitor)
      .subscribe(response => 
        this.selectedCompetitor = response
      );
      this.selectedEditType = '';
    }

  }



}
