import {Injectable} from "@angular/core";

import {Http} from "@angular/http"
import 'rxjs/add/operator/toPromise'
import {Buyer} from "./Buyer"

const url: string = "http://localhost:22064/api/Buyers";



@Injectable()
export class BuyersService{
  constructor(private http: Http ){}

  getBuyers(): Promise<Array<Buyer>> {
    return this.http
      .get(url)
      .toPromise()
      .then(resp => resp.json() as Array<Buyer>)
      .catch(err => { console.log(err); return new Array<Buyer>()});
  }

}
