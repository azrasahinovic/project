import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService, User } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user!: User[];
 

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.login(user).subscribe(
      user => this.user = user
    )
  }

 

}
