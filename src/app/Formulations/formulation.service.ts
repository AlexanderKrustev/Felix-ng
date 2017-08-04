import {Injectable} from "@angular/core";

import {Http} from "@angular/http"
import 'rxjs/add/operator/toPromise'
import {Formulation} from "./formulation"

const url: string = "http://localhost:22064/api/Formulations";



@Injectable()
export class FormulationsService{
  constructor(private http: Http ){}

  getFormulations(): Promise<Array<Formulation>> {
    return this.http
      .get(url)
      .toPromise()
      .then(resp => resp.json() as Array<Formulation>)
      .catch(err => { console.log(err); return new Array<Formulation>()});
  }

}
