import { Component, OnInit } from '@angular/core';
import { SportService } from 'src/app/services/sport.service';
import { Category } from 'src/app/Sport';


@Component({
  selector: 'app-lol',
  templateUrl: './lol.component.html',
  styleUrls: ['./lol.component.scss']
})
export class LolComponent implements OnInit {
  categories!: Category[];
  public selectedCategory: any;

  constructor(private sportService: SportService) { }

  ngOnInit(): void {
    this.sportService.getCategoriesForSport(110).subscribe(categories =>
      this.categories = categories)
  }

  updateCategory(event: any) {
    this.selectedCategory = this.categories.find(el => el.id === event.target.value)
  }


}
