import {Injectable} from "@angular/core";

import {Http} from "@angular/http"
import 'rxjs/add/operator/toPromise'
import {Consignee} from "./Consignee"

const url: string = "http://localhost:22064/api/Consignees";



@Injectable()
export class ConsigneesService{
  constructor(private http: Http ){}

  getConsignees(): Promise<Array<Consignee>> {
    return this.http
      .get(url)
      .toPromise()
      .then(resp => resp.json() as Array<Consignee>)
      .catch(err => { console.log(err); return new Array<Consignee>()});
  }

}
