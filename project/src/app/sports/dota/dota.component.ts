import { Component, OnInit } from '@angular/core';
import { SportService } from 'src/app/services/sport.service';
import { Category, Competition, Competitor, Player } from 'src/app/Sport';

@Component({
  selector: 'app-dota',
  templateUrl: './dota.component.html',
  styleUrls: ['./dota.component.scss']
})
export class DotaComponent implements OnInit {
  
  categories!: Category[];
  competition!: Competition;
  competitions!: Competition[];
  public selectedCategory: any;
  selectedCompetitions: any;
  selectedCompetitors: any;
  competitors!: Competitor[];
  competitor!: Competitor[];
  players!: Player[];
  selectedPlayers: any;

  
  show: boolean = false;
  autohide: boolean = true;
  message!: string;
  showErrorMessage!: boolean;
  errorMessage!: string;


  constructor(private sportService: SportService) { }

  ngOnInit(): void {
    this.sportService
    .getCategoriesForSport(111)
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
}
updateCategory(event: any) {
  // this.selectedCategory = event.target.value;
  this.selectedCategory = this.categories.find(el => 
    el.id === event.target.value);
    if (this.selectedCategory) {
  this.sportService.getCompetitionsForCategories(this.selectedCategory?.id).subscribe((competitions) => {
    this.competitions = competitions;
    this.show = this.competitions == null || this.competitions.length === 0;
    this.message = 'No competitions found!';
  },
  (error) => {
    this.showErrorMessage = true;
    this.errorMessage = 'Something went wrong!';
    console.error(error);
  }
  );
}
  
  console.log(this.selectedCategory);
}
updateCompetitions(event: any) {
  // this.selectedCategory = event.target.value;
  this.selectedCompetitions = this.competitions.find(el => el.id === event.target.value);
  if (this.selectedCompetitions) {
  this.sportService.getCompetitorsForCompetitions(this.selectedCompetitions?.id).subscribe(competitors => {
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
}
  console.log(this.selectedCompetitions);
  
}
updateCompetitors(event: any) {
  // this.selectedCategory = event.target.value;
  this.selectedCompetitors = this.competitors.find(el => el.id === event.target.value);
  if(this.selectedCompetitors) {
  console.log(this.selectedCompetitors);
  this.sportService.getPlayersForCompetitors(this.selectedCompetitors?.id).subscribe(players => {
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
}



