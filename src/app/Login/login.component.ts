import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "./auth.service"
import {User} from "./user";

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent  {
  currentUser: User=new User();
  loading = false;
  error = '';


  constructor(private router: Router,
              private authenticationService: AuthService) {
  }


  login() {
    this.authenticationService.login(this.currentUser.username, this.currentUser.password);
  }




}
