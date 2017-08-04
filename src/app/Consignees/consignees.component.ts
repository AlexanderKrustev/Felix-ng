import {Component} from "@angular/core"
import {Consignee} from "./Consignee";
import {ConsigneesService} from "./consignees.service";

@Component({
  selector: "component-tab",
  templateUrl: './consignees.component.html',
  styleUrls: ['../Shared/vars.buttons.css']
})

export class ConsigneesComponent{
  consigneesArr : Array<Consignee>
  constructor (private data : ConsigneesService) { }

  listConsignees(){
    this.data.getConsignees()
      .then(consigneesInfo=> this.consigneesArr=consigneesInfo);

  }

}
