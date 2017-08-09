import {Component, OnInit} from "@angular/core"
import {Package} from "./Package";
import {DataService} from "../Services/data.services";
import {LoaderService} from "../Loader/loader.service";

const url: string = "http://localhost:22064/api/Packages";

@Component({
  selector: "packages-tab",
  templateUrl: './packages.component.html',
  styleUrls: ['../Shared/vars.buttons.css']
})

export class PackagesComponent implements OnInit{
  packArr : Package[]
  pack:Package = new Package();

  constructor (
    private data : DataService,
    private loader: LoaderService) {

  }

  ngOnInit(){
    this.listPackages()
  }

  private listPackages(){
    this.loader.startLoading();
    this.data.getData(url)
      .subscribe(
        result=>{this.packArr=result},
        error => {console.error(error)},
        ()=>this.loader.ednLoading()
      )
  }

  onSubmit() {
    if(this.data.validateAdd(this.packArr,this.pack.Name)){
      this.loader.startLoading()
      this.data.create(url,this.pack)
        .subscribe(
          result=>this.listPackages(),
          error=>{console.error(error)},
          ()=>this.loader.ednLoading()
        )
    }
    else{
      alert(this.pack.Name+' already exist')
    }

  }

  onDelete(inputPack:Package){
    this.loader.startLoading()
    this.data.deleteById(url, inputPack.Key)
      .subscribe(
        response => this.packArr = this.packArr.filter(h => h !== inputPack),
        error=>console.error(error) ,
        ()=>this.loader.ednLoading()
      )
  }

}
