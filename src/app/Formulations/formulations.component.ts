import {Component, OnInit} from "@angular/core"
import {DataService} from "../Services/DataService";
import {LoaderService} from "../Loader/loader.service";
import {Formulation} from "./formulation";

const url: string = "http://localhost:22064/api/Formulations";

@Component({
  selector: "formualtions-tab",
  templateUrl: './formulations.component.html',
  styleUrls: ['../Shared/vars.buttons.css','../Shared/vars.table.css']
})

export class FormulationsComponent implements OnInit{
  formualtionArr : Formulation[]
  formulation:Formulation = new Formulation();

  constructor (
    private data : DataService,
    private loader: LoaderService) {

  }

  ngOnInit(){
    this.listFormulations()
  }

  private listFormulations(){
    this.loader.startLoading();
    this.data.getData(url)
      .subscribe(
        result=>{this.formualtionArr=result},
        error => {console.error(error)},
        ()=>this.loader.ednLoading()
      )
  }

  onSubmit() {
    if(this.data.validateAdd(this.formualtionArr,this.formulation.Name)){
      this.loader.startLoading()
      this.data.create(url,this.formulation)
        .subscribe(
          result=>this.listFormulations(),
          error=>{console.error(error)},
          ()=>this.loader.ednLoading()
        )
    }
    else{
      alert(this.formulation.Name+' already exist')
    }

  }

  onDelete(inputPack: Formulation){
    this.loader.startLoading()
    this.data.deleteById(url, inputPack.Key)
      .subscribe(
        response => this.formualtionArr = this.formualtionArr.filter(h => h !== inputPack),
        error=>console.error(error) ,
        ()=>this.loader.ednLoading()
      )
  }

}
