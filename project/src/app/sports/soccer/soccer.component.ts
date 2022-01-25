import { Component, OnInit } from '@angular/core';
import { SportService } from 'src/app/services/sport.service';
import { Category } from 'src/app/Sport';

@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.scss']
})
export class SoccerComponent implements OnInit {
  category!: Category;
 
  categories!: Category[];
  public selectedCategory: string = '';
  

  constructor(private sportService: SportService) { }

  ngOnInit(): void {
    this.sportService.getCategoriesForSport(1).subscribe(categories =>
      this.categories = categories)
  }
  updateCategory(event: any) {
    this.selectedCategory = event.target.value;
  }
}
