import {Component} from "@angular/core"
import {Buyer} from "./Buyer";
import {DataService} from "../Services/DataService";
import {LoaderService} from "../Loader/loader.service";


const url: string = "http://localhost:22064/api/Buyers";

@Component({
  selector: "buyers-tab",
  templateUrl: './buyers.component.html',
  styleUrls: ['../Shared/vars.buttons.css']
})

export class BuyersComponent{
  buyersArr : Buyer[];
  buyer: Buyer;

  constructor (
    private data : DataService,
    private loader: LoaderService)
  {
   this.buyer= new Buyer();
  }

  ngOnInit(){
    this.listBuyers()
  }

  private listBuyers(){
    this.loader.startLoading();
    this.data.getData(url)
      .subscribe(
        result=>{this.buyersArr=result},
        error => {console.error(error)},
        ()=>this.loader.ednLoading()
      )
  }

  onSubmit() {
    if(this.data.validateAdd(this.buyersArr,this.buyer.Name)){
      this.loader.startLoading()
      this.data.create(url,this.buyer)
        .subscribe(
          result=>this.listBuyers(),
          error=>{console.error(error)},
          ()=>this.loader.ednLoading()
        )
    }
    else{
      alert(this.buyer.Name+' already exist')
    }

  }

  onDelete(inputBuyer: Buyer){
    this.loader.startLoading()
    this.data.deleteById(url, inputBuyer.Key)
      .subscribe(
        response => this.buyersArr = this.buyersArr.filter(h => h !== inputBuyer),
        error=>console.error(error) ,
        ()=>this.loader.ednLoading()
      )
  }

}
