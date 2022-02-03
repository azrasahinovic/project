import { Component, OnInit } from '@angular/core';
import { Category, Competition, Player } from 'src/app/Sport';
import { SportService } from 'src/app/services/sport.service';
import { Competitor } from 'src/app/Sport';
import { ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-boxing',
  templateUrl: './boxing.component.html',
  styleUrls: ['./boxing.component.scss']
})
export class BoxingComponent implements OnInit {
  categories!: Category[];
  category!: Category;
  public selectedCategory: any;
  selectedCompetition: any;
  competition!: Competition[];
  competitions!: Competition[];
  selectedCompetitor: any;
  competitors!: Competitor[];
  players!: Player[];

  show: boolean = false;
  autohide: boolean = true;
  message!: string;
  showErrorMessage!: boolean;
  errorMessage!: string;

  closeResult!: string;
  selectedEditType = '';


  constructor(private sportService: SportService,
              private modalService: NgbModal) { }

    ngOnInit(): void {
      this.sportService
      .getCategoriesForSport(10)
      .subscribe(
        (categories) => {
          this.categories = categories.sort((a, b) => a.name.localeCompare(b.name));
          this.show = this.categories == null || this.categories.length === 0;
          this.message = 'No categories found!';
        },
        (error) => {
          this.showErrorMessage = true;
          this.errorMessage = 'Something went wrong!';
          console.error(error);
        }

      ); 
  }

  selectCategory(event: any) {
    // this.selectedCategory = event.target.value;
     this.selectedCategory = this.categories.find(
      el => el.id === event.target.value);
      
      if (this.selectedCategory) {
        this.selectedCompetition = null;
        this.selectedCompetitor = null;
        this.competitions = [];
        this.competitors = [];
        this.players = [];

        this.getCompetitionsForCategory(this.selectedCategory.id);
      }
    }
    
      getCompetitionsForCategory(category: string) {
        this.sportService.getCompetitionsForCategories(category).subscribe(
          (competitions) => {
      this.competitions = competitions;
      this.show = this.competitions == null || this.competitions.length === 0;
      this.message = 'No competitions found!';
    },
    (error) => {
      this.showErrorMessage = true;
      this.errorMessage = 'Something went wrong!';
      console.error(error);
    });
    console.log(this.selectedCategory);
    }

  selectCompetition(event: any) {
    // this.selectedCategory = event.target.value;
    this.selectedCompetition = this.competitions.find(
      el => el.id === event.target.value);

    if (this.selectedCompetition) {
      this.selectedCompetitor = null;
      this.competitors = [];
      this.players = [];

      this.getCompetitorsForCompetition(this.selectedCompetition.id);
    }
  }
  getCompetitorsForCompetition(competition: string) {
  this.sportService.getCompetitorsForCompetitions(competition).subscribe(
    competitors => {
      this.competitors = competitors;
      this.show = this.competitors == null || this.competitors.length === 0;
      this.message = 'No competitors found!';
    },
    (error) => {
      this.showErrorMessage = true;
      this.errorMessage = 'Something went wrong!';
      console.error(error);
    }
    )
  
    console.log(this.selectedCompetition);
}

 open(content: any, type: string) {
  this.selectedEditType = type;
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.selectedEditType = '';
   
    this.closeResult = `Closed with: ${result}`;
    
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
 }

 private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
 }

 save() {
  if(this.selectedEditType === 'category') {
    this.sportService.editCategory(this.category).subscribe(
      category => this.category = category
    );
  }
 }
}



