import {Component, OnInit} from "@angular/core"
import {Buyer} from "../../Buyers/Buyer";
import {DataService} from "../../Services/DataService";
import {LoaderService} from "../../Loader/loader.service";
import {Consignee} from "../../Consignees/Consignee";

const buyerUrl: string = "http://localhost:22064/api/Buyers";
const consigneeUrl: string = "http://localhost:22064/api/Consignees";

@Component({
  selector: 'create-deal',
  templateUrl: './create-deal.component.html'
})


export class CreateDealComponent implements OnInit{
   private buyers: Buyer[];
   private buyer: Buyer;

  private consignees: Buyer[];
  private consignee: Buyer;

  private deal: Deal;


   constructor(private data: DataService,private loader: LoaderService){
       this.buyer=new Buyer();
       this.consignee=new Consignee();
   }

  ngOnInit(){
    this.loadBuyers();
    this.loadConsignees();
  }

  private loadBuyers(){
    this.loader.startLoading();
    this.data.getData(buyerUrl)
      .subscribe(
        response=>this.buyers=response,
         error2 => alert(error2),
        ()=>this.loader.ednLoading()
      )
  }

  private loadConsignees(){
    this.loader.startLoading();
    this.data.getData(consigneeUrl)
      .subscribe(
        response=>this.consignees=response,
        error2 => alert(error2),
        ()=>this.loader.ednLoading()
      )
  }

  submitDeal(){

  }
}
