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

  constructor(private sportService: SportService) { }

    ngOnInit(): void {
      this.sportService.getCategoriesForSport(10).subscribe(categories =>
        this.categories = categories)
  }

  updateCategory(event: any) {
    this.selectedCategory = this.categories.find(el => el.id === event.target.value)
    this.sportService.getCompetitionsForCategories(this.selectedCategory?.id).subscribe(competitions =>
      this.competitions = competitions)
      console.log(this.selectedCategory);
      
  }
  updateCampetitions(event:any) {
    this.selectedCompetitions = this.competitions.find(el => el.id === event.target.value)
    this.sportService.getCompetitorsForCompetitions(this.selectedCompetitions?.id).subscribe(competitors => 
      this.competitors = competitors)
  }

  updateCompetitors(event:any) {
    this.selectedCompetitors = this.competitors.find(el => el.id === event.target.value)
    this.sportService.getPlayersForCompetitors(this.selectedCompetitors.id).subscribe(players =>
      this.players = players);
  }



}
