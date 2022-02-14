import { Component, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { throwIfEmpty } from 'rxjs';
import { SportService } from 'src/app/services/sport.service';
import { Category, Competition, Competitor, Player } from 'src/app/Sport';

@Component({
  selector: 'app-sport-component',
  templateUrl: './sport-component.component.html',
  styleUrls: ['./sport-component.component.scss']
})
export class SportComponentComponent implements OnChanges {
  categories!: Category[];
  category!: Category;
  
  competition!: Competition;
  competitions!: Competition[];
  selectedCategory: any;
  selectedCompetition: any;
  selectedCompetitor: any;
  competitors!: Competitor[];
  competitor!: Competitor[];
  players!: Player[];
  selectedPlayers: any;
  @Input() selectedSport: any;

  show: boolean = false;
  autohide: boolean = true;
  message!: string;
  showErrorMessage!: boolean;
  errorMessage!: string;

  isLoading: boolean = false;

  display: boolean = false;

  selectedEditType = '';
 

  constructor(private sportService: SportService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private confirmationService: ConfirmationService,
    private router: Router
    ) { }

  ngOnChanges(): void {
    
    this.sportService
    .getCategoriesForSport(this.selectedSport.id)
    .subscribe(
      (categories) => {
        this.categories = categories.sort((a, b) => a.name.localeCompare(b.name));
        if(this.categories == null || this.categories.length === 0) {
          this.messageService.add(
            {
            severity:'warn', 
            detail:'No categories found!'});
        }
        
      },
      (error) => {
        this.messageService.add(
          {
          severity:'error', 
          summary:'Error',
          detail:'Something went wrong!!'});
      });
    if (this.selectedSport) {
      this.selectedCategory = null;
      this.selectedCompetition = null;
      this.selectedCompetitor = null;
      this.competitions = [];
      this.competitors = [];
      this.players = [];
    }
    this.primengConfig.ripple = true;
  }

  selectCategory(event: any) {
    // this.selectedCategory = event.target.value;
    
      
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
      

      if(this.competitions == null || this.competitions.length === 0) {
        this.messageService.add(
          {
          severity:'warn', 
          detail:'No competitions found!'});
      }
      
    },
    (error) => {
      this.messageService.add(
        {
        severity:'error', 
        summary:'Error',
        detail:'Something went wrong!!'});
    });
    console.log(this.selectedCategory);
    }

    selectCompetition(event: any) {
      // this.selectedCategory = event.target.value;
      
  
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
        if(this.competitors == null || this.competitors.length === 0) {
          this.messageService.add(
            {
            severity:'warn', 
            detail:'No competitors found!'});
        }
        
      },
      (error) => {
        this.messageService.add(
          {
          severity:'error', 
          summary:'Error',
          detail:'Something went wrong!!'});
      });
    
      console.log(this.selectedCompetition);
  }

  selectCompetitor(event: any) {
    

    if(this.selectedCompetitor) {
      this.players = [];

      this.getPlayersForCompetitor(this.selectedCompetitor.id);
    }
    console.log(this.selectedCompetitor);
  }


    getPlayersForCompetitor(competitor: string) {
      this.isLoading = true;
      
    this.sportService.getPlayersForCompetitors(competitor).subscribe( 
      
      players => {
      
      this.players = players;
      this.isLoading = false;
     
    
    //   this.show = this.players == null || this.players.length === 0;
    //   this.message = 'No players found!';
    // },
    // (error) => {
    //   this.showErrorMessage = true;
    //   this.errorMessage = 'Something went wrong!!';
    //   console.error(error);
    // })

  // })}
  if(this.players == null || this.players.length === 0) {
    this.messageService.add(
      {
      severity:'warn', 
      detail:'No players found!'});
  }
  
},
(error) => {
  this.messageService.add(
    {
    severity:'error', 
    summary:'Error',
    detail:'Something went wrong!!'});
});
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

    if(this.selectedEditType === 'competition') {
      this.sportService.editCompetition(this.selectedCompetition)
      .subscribe(response => 
        this.selectedCompetition = response
      );
      this.selectedEditType = '';
    }

    if(this.selectedEditType === 'competitor') {
      this.sportService.editCompetitor(this.selectedCompetitor)
      .subscribe(response => 
        this.selectedCompetitor = response
      );
      this.selectedEditType = '';
    }

  }

}
