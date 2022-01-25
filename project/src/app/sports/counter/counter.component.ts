import { Component, OnInit } from '@angular/core';
import { SportService } from 'src/app/services/sport.service';
import { Category } from 'src/app/Sport';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  categories!: Category[];

  constructor(private sportService: SportService) { }

  ngOnInit(): void {
    this.sportService.getCategoriesForSport(109).subscribe(categories =>
      this.categories = categories)
  }

}
