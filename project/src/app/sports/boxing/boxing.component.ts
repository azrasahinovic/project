import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Sport';
import { SportService } from 'src/app/services/sport.service';

@Component({
  selector: 'app-boxing',
  templateUrl: './boxing.component.html',
  styleUrls: ['./boxing.component.scss']
})
export class BoxingComponent implements OnInit {
  categories!: Category[];

  constructor(private sportService: SportService) { }

    ngOnInit(): void {
      this.sportService.getCategoriesForSport(10).subscribe(categories =>
        this.categories = categories)
  }

}
