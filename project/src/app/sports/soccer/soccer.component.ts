import { Component, OnInit } from '@angular/core';
import { SportService } from 'src/app/services/sport.service';
import { Category, Competition, Competitor } from 'src/app/Sport';
import { Sport } from 'src/app/Sport';
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

  constructor(private sportService: SportService) { }

  ngOnInit(): void {
    this.sportService.getCategoriesForSport(1).subscribe(categories =>
      this.categories = categories.sort((a,b) => a.name.localeCompare(b.name)))
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
    
  }
}


