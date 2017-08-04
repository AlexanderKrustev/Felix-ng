import {Component} from "@angular/core"
import {ProductService} from "./products.service";
import {Product} from "./Product"



@Component({
  selector: "products-tab",
  templateUrl:'./products.component.html',
  styleUrls: ['../Shared/vars.buttons.css']
})

export class ProductsComponent
{
  productsArr : Array<Product>
  constructor (private data : ProductService) { }

   listProducts(){
    this.data.getProducts()
      .then(productInfo=> this.productsArr=productInfo,);

   }


}
