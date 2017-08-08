import {Component} from "@angular/core"
import {Consignee} from "./Consignee";
import {DataService} from "../Services/DataService";
import {LoaderService} from "../Loader/loader.service";

const url: string = "http://localhost:22064/api/Consignees";

@Component({
  selector: "component-tab",
  templateUrl: './consignees.component.html',
  styleUrls: ['../Shared/vars.buttons.css']
})

export class ConsigneesComponent{
  consigneesArr : Consignee[]
  consignee: Consignee = new Consignee();

  constructor (
    private data : DataService,
    private loader: LoaderService) {

  }

  ngOnInit(){
    this.listCountries()
  }

  private listCountries(){
    this.loader.startLoading();
    this.data.getData(url)
      .subscribe(
        result=>{this.consigneesArr=result},
        error => {console.error(error)},
        ()=>this.loader.ednLoading()
      )
  }

  onSubmit() {
    if(this.data.validateAdd(this.consigneesArr,this.consignee.Name)){
      this.loader.startLoading()
      this.data.create(url,this.consignee)
        .subscribe(
          result=>this.listCountries(),
          error=>{console.error(error)},
          ()=>this.loader.ednLoading()
        )
    }
    else{
      alert(this.consignee.Name+' already exist')
    }

  }

  onDelete(inputPack: Consignee){
    this.loader.startLoading()
    this.data.deleteById(url, inputPack.Key)
      .subscribe(
        response => this.consigneesArr = this.consigneesArr.filter(h => h !== inputPack),
        error=>console.error(error) ,
        ()=>this.loader.ednLoading()
      )
  }

}
