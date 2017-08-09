import {Component} from "@angular/core"
import {Country} from "./Country";
import {DataService} from "../Services/data.services";
import {LoaderService} from "../Loader/loader.service";

const url: string = "http://localhost:22064/api/Countries";

@Component({
  selector: "contries-tab",
  templateUrl: `./countries.component.html`,
  styleUrls: ['../Shared/vars.buttons.css','../Shared/vars.table.css']
})

export class CountriesComponent{
  countriesArr : Country[]
  country: Country = new Country();

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
        result=>{this.countriesArr=result},
        error => {console.error(error)},
        ()=>this.loader.ednLoading()
      )
  }

  onSubmit() {
    if(this.data.validateAdd(this.countriesArr,this.country.Name)){
      this.loader.startLoading()
      this.data.create(url,this.country)
        .subscribe(
          result=>this.listCountries(),
          error=>{console.error(error)},
          ()=>this.loader.ednLoading()
        )
    }
    else{
      alert(this.country.Name+' already exist')
    }

  }

  onDelete(inputPack: Country){
    this.loader.startLoading()
    this.data.deleteById(url, inputPack.Key)
      .subscribe(
        response => this.countriesArr = this.countriesArr.filter(h => h !== inputPack),
        error=>console.error(error) ,
        ()=>this.loader.ednLoading()
      )
  }

}

