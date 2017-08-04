import {Injectable} from "@angular/core";

import {Http} from "@angular/http"
import 'rxjs/add/operator/toPromise'
import {Country} from "./Country"

const url: string = "http://localhost:22064/api/Countries";



@Injectable()
export class CountriesService{
  constructor(private http: Http ){}

  getCountries(): Promise<Array<Country>> {
    return this.http
      .get(url)
      .toPromise()
      .then(resp => resp.json() as Array<Country>)
      .catch(err => { console.log(err); return new Array<Country>()});
  }

}
