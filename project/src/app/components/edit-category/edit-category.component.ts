import { Component, Input, OnInit } from '@angular/core';
import { SportService } from 'src/app/services/sport.service';
import { Category, ICountry } from 'src/app/Sport';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  @Input() selectedCategory: any;
  country: any;

  constructor(private sportService: SportService) { }

  ngOnInit(): void {
  }


}
