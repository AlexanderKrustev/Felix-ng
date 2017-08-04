import {Injectable} from "@angular/core";

import {Http} from "@angular/http"
import 'rxjs/add/operator/toPromise'
import {Package} from "./Package"

const url: string = "http://localhost:22064/api/Packages";



@Injectable()
export class PackagesService{
  constructor(private http: Http ){}

  getPackages(): Promise<Array<Package>> {
    return this.http
      .get(url)
      .toPromise()
      .then(resp => resp.json() as Array<Package>)
      .catch(err => { console.log(err); return new Array<Package>()});
  }

}
