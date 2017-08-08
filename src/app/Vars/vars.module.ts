import { NgModule } from '@angular/core'
import {HttpModule} from "@angular/http"
import {BrowserModule} from "@angular/platform-browser"
import {ProductsComponent} from "../Products/products.component";
import {BuyersComponent} from "../Buyers/buyers.component";
import {CountriesComponent} from "../Countires/countries.component";
import {PackagesComponent} from "../Packages/packages.components";



import {PortsComponent} from "../Ports/ports.component";
import {ConsigneesComponent} from "../Consignees/consignees.component";





import {FormsModule} from "@angular/forms";
import {FormulationsComponent} from "../Formulations/formulations.component";



@NgModule({
  declarations: [
    ProductsComponent,
    BuyersComponent,
    CountriesComponent,
    FormulationsComponent,
    PackagesComponent,
    PortsComponent,
    ConsigneesComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [],
  exports: [ProductsComponent]
})


export class VarsModule { }
