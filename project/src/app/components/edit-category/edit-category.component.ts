import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { SportService } from 'src/app/services/sport.service';
import { Category, ICountry, ISourceCategory, Sport} from 'src/app/Sport';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  @Input() selectedCategory: any;
  sourceCategories!: ISourceCategory[];
  sport !: Sport | undefined;
 

  constructor(private sportService: SportService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    // this.sportService.getSports()
    // .subscribe( sports => 
    //   this.sport = sports.find(el => el.id === this.selectedCategory.sportID));
    this.sport = this.sharedService.getSport()
    .find((el: Sport) => el.id === this.selectedCategory.sportID)
  }
}
