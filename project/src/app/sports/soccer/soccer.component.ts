import { Component, OnInit } from '@angular/core';
import { SportService } from 'src/app/services/sport.service';
import { Category, Competition, Competitor, Player } from 'src/app/Sport';
import { Sport } from 'src/app/Sport';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.scss']
})
export class SoccerComponent implements OnInit {
  sport!: Sport[];
  category!: Category;
 
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

   
  constructor(private sportService: SportService) { }

  ngOnInit(): void {
    this.sportService.getCategoriesForSport(1).subscribe(categories =>
      this.categories = categories.sort((a,b) => a.name.localeCompare(b.name)))
     
      this.show = this.categories == null || this.categories.length === 0;
      
  }
  updateCategory(event: any) {
    // this.selectedCategory = event.target.value;
    this.selectedCategory = this.categories.find(el => el.id === event.target.value)
    this.sportService.getCompetitionsForCategories(this.selectedCategory?.id).subscribe(competitions =>
      this.competitions = competitions)
     
    
    console.log(this.selectedCategory);
  }
  updateCompetitions(event: any) {
    // this.selectedCategory = event.target.value;
    this.selectedCompetitions = this.competitions.find(el => el.id === event.target.value)
    this.sportService.getCompetitorsForCompetitions(this.selectedCompetitions?.id).subscribe(competitors =>
      this.competitors = competitors)
    console.log(this.selectedCompetitions);
    
  }
  updateCompetitors(event: any) {
    // this.selectedCategory = event.target.value;
    this.selectedCompetitors = this.competitors.find(el => el.id === event.target.value)
    console.log(this.selectedCompetitors);
    this.sportService.getPlayersForCompetitors(this.selectedCompetitors?.id).subscribe(players =>
      this.players = players)
  }
}


