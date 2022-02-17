import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { SportService } from 'src/app/services/sport.service';
import { Category, Competition, Competitor, Player } from 'src/app/Sport';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories!: Category[];
  competitions!: Competition[];
  competitors!: Competitor[];
  players!: Player[];
  selectedCategory: any;
  selectedSport: any;

  display: boolean = false;

  selectedEditType = '';
  selectedCompetition: any;
  selectedCompetitor: any;

  constructor(private sportService: SportService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getSelectedSport().subscribe(
     (response) => {
      this.selectedSport = response;
       this.selectedCategory = null;
      this.getCat();
     })
  }

  getCat() {
       this.sportService.getCategoriesForSport(this.selectedSport.id).subscribe(
      (categories) => {
      this.categories = categories.sort((a, b) => a.name.localeCompare(b.name));
      this.sharedService.setCategories(categories);
      })
      
  }

  selectCategory() {
    this.sharedService.setSelectedCategory(this.selectedCategory);
  }

  showDialog(type: string) {
    this.selectedEditType = type;
    this.display = true;
}

close() { 
  this.display = false;
}

save() {
  if(this.selectedEditType === 'category') {
    this.sportService.editCategory(this.selectedCategory)
    .subscribe(response => 
      this.selectedCategory = response
    );
    this.selectedEditType = '';
  }
}

 


}
