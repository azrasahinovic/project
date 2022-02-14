import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService, User } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 username: string = '';
 password: string = '';

  constructor(private loginService: LoginService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {}

  login() {
    if (this.username && this.password) {
      const user: User = {
        username: this.username,
        password: this.password
      }
      console.log(user);
      
      this.loginService.login(user).subscribe(tokenObject => {
      localStorage.setItem('mfcToken', tokenObject.token);
      this.router.navigate(['/home'])
    },
    error => this.messageService.add({
      severity: 'error',
      summary: 'Error', 
      detail:`The username/password you've entered is incorrect!`
    })
    );
  }
    
}
    
}

