import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import {User} from "./user";
import {URLSearchParams} from "@angular/http"

const url: string = "http://localhost:22064/Token";


@Injectable()
export class AuthService {
  public token: string;
  private header=new Headers();
  private body = new URLSearchParams();

  constructor(private http: Http) {
    // set token if saved in local storage
   // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //  this.token = currentUser && currentUser.token;
  }

  private addHeader(key:string,value:string){
    this.header.append(key,value);
  }


  login(username: string, password: string){
     this.body.set('username',username);
     this.body.set('password',password);
     this.body.set('grant_type','password');

    return this.http
      .post(url, this.body,{headers: this.header})
      .toPromise()
      .then(resp => localStorage.setItem('currentUser',resp.json().access_token))
      .catch(err => { console.log(err)});
  }


  logout(): void {
    localStorage.removeItem('currentUser');
  }

  loggedIn(): boolean{
    if(localStorage.getItem('currentUser')){
      return true;
    }
    return false;
  }
}
