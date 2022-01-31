import { Component, OnInit } from '@angular/core';
import { Category, Competition, Player } from 'src/app/Sport';
import { SportService } from 'src/app/services/sport.service';
import { Competitor } from 'src/app/Sport';

@Component({
  selector: 'app-boxing',
  templateUrl: './boxing.component.html',
  styleUrls: ['./boxing.component.scss']
})
export class BoxingComponent implements OnInit {
  categories!: Category[];
  public selectedCategory: any;
  selectedCompetitions: any;
  competition!: Competition[];
  competitions!: Competition[];
  selectedCompetitors: any;
  competitors!: Competitor[];
  players!: Player[];

  show: boolean = false;
  autohide: boolean = true;
  message!: string;
  showErrorMessage!: boolean;
  errorMessage!: string;


  constructor(private sportService: SportService) { }

    ngOnInit(): void {
      this.sportService
      .getCategoriesForSport(10)
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
    this.sportService.getPlayersForCompetitors(this.selectedCompetitors?.id).subscribe(players => 
      this.players = players)}
 }
}


