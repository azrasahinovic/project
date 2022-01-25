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

  constructor(private sportService: SportService) { }

  ngOnInit(): void {
    this.sportService.getCategoriesForSport(110).subscribe(categories =>
      this.categories = categories)
  }

}
