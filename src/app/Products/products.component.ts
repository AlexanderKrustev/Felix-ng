import {Component} from "@angular/core"
import {OnInit} from "@angular/core"
import {Product} from "./Product"
import {DataService} from "../Services/data.services"
import {LoaderService} from "../Loader/loader.service"

const url: string = "http://localhost:22064/api/Products";

@Component({
  selector: "products-tab",
  templateUrl:'./products.component.html',
  styleUrls: ['../Shared/vars.buttons.css']
})


export class ProductsComponent implements OnInit{
  productsArr : Product[]
  product:Product=new Product();

  constructor (

    private data : DataService,
    private loader: LoaderService) {

  }

  ngOnInit(){
    this.listPorts()
  }

private listPorts(){
    this.loader.startLoading();
    this.data.getData(url)
      .subscribe(
        result=>{this.productsArr=result},
        error => {console.error(error)},
        ()=>this.loader.ednLoading()
      )
  }

  onSubmit() {
    if(this.data.validateAdd(this.productsArr,this.product.Name)){
      this.loader.startLoading()
      this.data.create(url,this.product)
        .subscribe(
          result=>this.listPorts(),
          error=>{console.error(error)},
          ()=>this.loader.ednLoading()
        )
    }
    else{
      alert(this.product.Name+' already exist')
    }

  }

  onDelete(pp: Product){
    this.loader.startLoading()
    this.data.deleteById(url, pp.Key)
      .subscribe(
        response => this.productsArr = this.productsArr.filter(h => h !== pp),
        error=>console.error(error) , //TODO: Global error handling
        ()=>this.loader.ednLoading()
      )
  }

}

