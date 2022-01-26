import { Component, OnInit } from '@angular/core';
import { SportService } from 'src/app/services/sport.service';
import { Category } from 'src/app/Sport';

@Component({
  selector: 'app-dota',
  templateUrl: './dota.component.html',
  styleUrls: ['./dota.component.scss']
})
export class DotaComponent implements OnInit {
  categories!: Category[];
  public selectedCategory: any;

  constructor(private sportService: SportService) { }

  ngOnInit(): void {
    this.sportService.getCategoriesForSport(111).subscribe(categories =>
      this.categories = categories)
  }

  updateCategory(event: any) {
    this.selectedCategory = this.categories.find(el => el.id === event.target.value)
  }

}
