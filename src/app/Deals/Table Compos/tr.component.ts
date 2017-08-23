import {Component, Input} from "@angular/core"
import {ColOption} from "../Show/ColOption";
import {Deal} from "../Deal";


@Component({
  selector:'[tr-felix]',
  templateUrl: './tr.component.html',
  styleUrls: ['./tables.css']
})

export class TrComponent{
  @Input("tr-visibility") colOptions: ColOption;
  @Input("tr-felix") dealData: Deal;

  constructor(){

  }

}
