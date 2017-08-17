import {Injectable, OnInit} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'
import {User} from "./user";
import {URLSearchParams} from "@angular/http"
import {Router} from "@angular/router";
import {AuthGuard} from "./auth-gruard.service";

const url: string = "http://localhost:22064/Token";


@Injectable()
export class AuthService{
  private header: Headers;
  private body: URLSearchParams;
  errorMsg: string='';
  private options: RequestOptions;
  private currentUser: User;

  constructor(private http: Http)
  {
    this.header=new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    this.body = new URLSearchParams();
    this.currentUser=new User;
    this.options= new RequestOptions({headers: this.header});
  }



  login(username: string, password: string){
  this.body.set('username',username);
  this.body.set('password',password);
  this.body.set('grant_type','password');
    let body1 = `username=${username}&password=${password}&grant_type=password`;
     this.http
      .post(url, body1, this.options)
      .map(response => response.json())
      .subscribe(
        response => {
          console.dir(response);
          this.currentUser.username=response.userName;
          this.currentUser.token = 'Berear ' + response.access_token;
          localStorage.setItem(this.currentUser.username, this.currentUser.token);
           },
         error => console.dir(error)
      )
    }






  logout(): void {
    localStorage.removeItem('currentUser');
  }

  loggedIn(): boolean{
    if(localStorage.getItem(this.currentUser.username)){
      return true;
    }
    return false;
  }
}
