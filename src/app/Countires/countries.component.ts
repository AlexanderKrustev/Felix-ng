import {Component} from "@angular/core"
import {Country} from "./Country";
import {CountriesService} from "./contries.services";

@Component({
  selector: "contries-tab",
  templateUrl: `./countries.component.html`,
  styleUrls: ['../Shared/vars.buttons.css']
})

export class CountriesComponent{
  countriesArr : Array<Country>
  constructor (private data : CountriesService) { }

  listCountries(){
    this.data.getCountries()
      .then(countryInfo=> this.countriesArr=countryInfo);
    console.log(this.countriesArr)
  }
}
