import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "./auth.service"
import {User} from "./user";


@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  currentUser: User = new User();




  constructor(private router: Router,
              private auth: AuthService) {
  }


  login() {
    this.auth.login(this.currentUser.username, this.currentUser.password);
  }



}

