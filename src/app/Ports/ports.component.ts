import {Component} from "@angular/core"
import {Port} from "./Port";
import {PortsService} from "./ports.service";



@Component({
  selector: "ports-tab",
  templateUrl: './ports.component.html',
  styleUrls: ['../Shared/vars.buttons.css','../Shared/vars.table.css']
})

export class PortsComponent{
  shown: boolean = false;
  portArr : Array<Port>;
  port1:Port=new Port();

  constructor (private data : PortsService) { }

  listPorts(){
    this.data.get()
      .then(portInfo=> this.portArr=portInfo);
    this.shown=false;
  }


  onSubmit() {
   this.data.create(this.port1)

  }

  onDelete(id:string){

    this.data.deleteById(id);
  }


  showForm(){
    this.shown=!this.shown;
  }
}
