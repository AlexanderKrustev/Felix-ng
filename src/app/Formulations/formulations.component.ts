import {Component} from "@angular/core"
import {Formulation} from "./formulation";
import {FormulationsService} from "./formulation.service";


@Component({
  selector: "formulations-tab",
  templateUrl: './formulations.component.html',
  styleUrls: ['../Shared/vars.buttons.css']
})

export class FormulationsComponent{
  formulationsArr : Array<Formulation>
  constructor (private data : FormulationsService) { }

  listFormulations(){
    this.data.getFormulations()
      .then(formualionsInfo=> this.formulationsArr=formualionsInfo);

  }
}
