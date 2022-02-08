import { Component, OnChanges, Input } from '@angular/core';
import { SportService } from 'src/app/services/sport.service';
import { Category, Competition, Competitor, Player } from 'src/app/Sport';

@Component({
  selector: 'app-sport-component',
  templateUrl: './sport-component.component.html',
  styleUrls: ['./sport-component.component.scss']
})
export class SportComponentComponent implements OnChanges {
  categories!: Category[];
  
  competition!: Competition;
  competitions!: Competition[];
  selectedCategory: any;
  selectedCompetition: any;
  selectedCompetitor: any;
  competitors!: Competitor[];
  competitor!: Competitor[];
  players!: Player[];
  selectedPlayers: any;
  @Input() selectedSport: any;

  show: boolean = false;
  autohide: boolean = true;
  message!: string;
  showErrorMessage!: boolean;
  errorMessage!: string;

  constructor(private sportService: SportService) { }

  ngOnChanges(): void {
    this.sportService
    .getCategoriesForSport(this.selectedSport.id)
    .subscribe(
      (categories) => {
        this.categories = categories.sort((a, b) => a.name.localeCompare(b.name));
        this.show = this.categories == null || this.categories.length === 0;
        this.message = 'No categories found!';
      },
      (error) => {
        this.showErrorMessage = true;
        this.errorMessage = 'Something went wrong!';
        console.error(error);
      }
     
    ); 
    if (this.selectedSport) {
      this.selectedCategory = null;
      this.selectedCompetition = null;
      this.selectedCompetitor = null;
      this.competitions = [];
      this.competitors = [];
      this.players = [];
    }
  }

  selectCategory(event: any) {
    // this.selectedCategory = event.target.value;
    
      
      if (this.selectedCategory) {
        this.selectedCompetition = null;
        this.selectedCompetitor = null;
        this.competitions = [];
        this.competitors = [];
        this.players = [];

        this.getCompetitionsForCategory(this.selectedCategory.id);
      }
    }
    
      getCompetitionsForCategory(category: string) {
        this.sportService.getCompetitionsForCategories(category).subscribe(
          (competitions) => {
      this.competitions = competitions;
      this.show = this.competitions == null || this.competitions.length === 0;
      this.message = 'No competitions found!';
    },
    (error) => {
      this.showErrorMessage = true;
      this.errorMessage = 'Something went wrong!';
      console.error(error);
    });
    console.log(this.selectedCategory);
    }

    selectCompetition(event: any) {
      // this.selectedCategory = event.target.value;
      
  
      if (this.selectedCompetition) {
        this.selectedCompetitor = null;
        this.competitors = [];
        this.players = [];
  
        this.getCompetitorsForCompetition(this.selectedCompetition.id);
      }
    }
    getCompetitorsForCompetition(competition: string) {
    this.sportService.getCompetitorsForCompetitions(competition).subscribe(
      competitors => {
        this.competitors = competitors;
        this.show = this.competitors == null || this.competitors.length === 0;
        this.message = 'No competitors found!';
      },
      (error) => {
        this.showErrorMessage = true;
        this.errorMessage = 'Something went wrong!';
        console.error(error);
      }
      )
    
      console.log(this.selectedCompetition);
  }

  selectCompetitor(event: any) {
    

    if(this.selectedCompetitor) {
      this.players = [];

      this.getPlayersForCompetitor(this.selectedCompetitor.id);
    }
    console.log(this.selectedCompetitor);
  }


    getPlayersForCompetitor(competitor: string) {
      
    this.sportService.getPlayersForCompetitors(competitor).subscribe( 
      
      players => {
      
      this.players = players;
     
    
      this.show = this.players == null || this.players.length === 0;
      this.message = 'No players found!';
    },
    (error) => {
      this.showErrorMessage = true;
      this.errorMessage = 'Something went wrong!!';
      console.error(error);
    })
  }
  
}
