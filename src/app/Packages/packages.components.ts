import {Component} from "@angular/core"
import {Package} from "./Package";
import {PackagesService} from "./packages.service";

@Component({
  selector: "packages-tab",
  templateUrl: './packages.component.html',
  styleUrls: ['../Shared/vars.buttons.css']
})

export class PackagesComponent{
  packagesArr : Array<Package>
  constructor (private data : PackagesService) { }

  listPackages(){
    this.data.getPackages()
      .then(packInfo=> this.packagesArr=packInfo);

  }
}
