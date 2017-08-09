import { Component, OnInit} from "@angular/core"
import {Port} from "./Port";
import {LoaderService} from "../Loader/loader.service";
import {DataService} from "../Services/data.services";

const url: string = "http://localhost:22064/api/Ports";

@Component({
  selector: "ports-tab",
  templateUrl: './ports.component.html',
  styleUrls: ['../Shared/vars.buttons.css','../Shared/vars.table.css']
})


export class PortsComponent implements OnInit{
  portArr : Port[]
  port1:Port=new Port();

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
        result=>{this.portArr=result},
        error => {console.error(error)},
        ()=>this.loader.ednLoading()
        )
  }

  onSubmit() {
   if(this.data.validateAdd(this.portArr,this.port1.Name)){
     this.loader.startLoading()
     this.data.create(url,this.port1)
       .subscribe(
         result=>this.listPorts(),
          error=>{console.error(error)},
         ()=>this.loader.ednLoading()
       )
   }
    else{
     alert(this.port1.Name+' already exist')
   }

  }

  onDelete(pp: Port){
    this.loader.startLoading()
    this.data.deleteById(url,pp.Key)
      .subscribe(
        response => this.portArr = this.portArr.filter(h => h !== pp),
        error=>console.error(error) , //TODO: Global error handling
        ()=>this.loader.ednLoading()
      )
  }

}
