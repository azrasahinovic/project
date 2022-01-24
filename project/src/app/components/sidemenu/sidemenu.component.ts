import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  sports: Array<{icon: string; name: string; }> = [
    {icon: 'fa-baseball-ball', name : 'Soccer'},
    {icon: 'fa-basketball-ball', name : 'Basketball'},
    {icon: 'fa-baseball-ball', name : 'Ice Hockey'},
    {icon: 'fa-baseball-ball', name : 'Tennis'},
    {icon: 'fa-baseball-ball', name : 'Handball'},
    {icon: 'fa-baseball-ball', name : 'Volleyball'},


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
