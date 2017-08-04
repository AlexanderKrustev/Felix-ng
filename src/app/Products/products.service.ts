import {Injectable} from "@angular/core";

import {Http} from "@angular/http"
import 'rxjs/add/operator/toPromise'
import {Product} from "./Product";

const url: string = "http://localhost:22064/api/Products";



@Injectable()
export class ProductService{
  constructor(private http: Http ){}

  getProducts(): Promise<Array<Product>> {
    return this.http
      .get(url)
      .toPromise()
      .then(resp => resp.json() as Array<Product>)
      .catch(err => { console.log(err); return new Array<Product>()});
  }

}
