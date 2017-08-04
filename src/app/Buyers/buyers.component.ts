import {Component} from "@angular/core"
import {Buyer} from "./Buyer";
import {BuyersService} from "./buyers.servies";

@Component({
  selector: "buyers-tab",
  templateUrl: './buyers.component.html',
  styleUrls: ['../Shared/vars.buttons.css']
})

export class BuyersComponent{
  buyersArr : Array<Buyer>
  constructor (private data : BuyersService) { }

  listBuyers(){
    this.data.getBuyers()
      .then(buyersInfo=> this.buyersArr=buyersInfo);

  }
}
