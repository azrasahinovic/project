import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { LoginService, User } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];
  username: string = '';
 password: string = '';

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.items = [
      {
        label:'Logout'
        
      }
    ]
   
  }

  logout() {
    localStorage.removeItem('mfcToken');
    this.router.navigate(['']);

  }
}
