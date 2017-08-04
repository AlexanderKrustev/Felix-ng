import { NgModule } from '@angular/core'
import {CommonModule} from "@angular/common"
import {HttpModule} from "@angular/http"
import {BrowserModule} from "@angular/platform-browser"
import {ProductsComponent} from "../Products/products.component";
import {BuyersComponent} from "../Buyers/buyers.component";
import {CountriesComponent} from "../Countires/countries.component";
import {FormulationsComponent} from "../Formulations/formulations.component";
import {PackagesComponent} from "../Packages/packages.components";

import {ProductService} from "../Products/products.service"
import {PortsComponent} from "../Ports/ports.component";
import {ConsigneesComponent} from "../Consignees/consignees.component";
import {PortsService} from "../Ports/ports.service";
import {PackagesService} from "../Packages/packages.service";
import {BuyersService} from "../Buyers/buyers.servies";
import {CountriesService} from "../Countires/contries.services";
import {ConsigneesService} from "../Consignees/consignees.service";
import {FormulationsService} from "../Formulations/formulation.service";
import {FormsModule} from "@angular/forms";



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
  providers: [
    ProductService,
    PortsService,
    PackagesService,
    BuyersService,
    ConsigneesService,
    CountriesService,
    FormulationsService
  ],
  bootstrap: [],
  exports: [ProductsComponent]
})


export class VarsModule { }
