import { Component, OnInit } from '@angular/core';
import { SportService } from 'src/app/services/sport.service';
import { Category, Competition } from 'src/app/Sport';
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

  constructor(private sportService: SportService) { }

  ngOnInit(): void {
    this.sportService.getCategoriesForSport(1).subscribe(categories =>
      this.categories = categories),
      this.sportService.getCompetitionsForCategories(5164).subscribe(competitions =>
        this.competitions = competitions)
  }
  updateCategory(event: any) {
    // this.selectedCategory = event.target.value;
    this.selectedCategory = this.categories.find(el => el.id === event.target.value)
    console.log(this.selectedCategory);
  }
  updateCompetitions(event: any) {
    this.selectedCompetitions = this.competitions.find(el => el.id === event.target.value)
    console.log(this.selectedCompetitions);
    console.log(this.selectedCompetitions)
  }
}
