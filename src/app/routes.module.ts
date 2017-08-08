import {Injectable, NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"

import {HomeComponent} from "./Home/home.component"
import {VarsComponent} from "./Vars/vars.component"
import {LoginComponent} from "./Login/login.component"

import {ProductsComponent} from "./Products/products.component"
import {DealComponent} from "./Deals/deals.component"
import {BuyersComponent} from "./Buyers/buyers.component"
import {PackagesComponent} from "./Packages/packages.components"
import {CountriesComponent} from "./Countires/countries.component"
import {FormulationsComponent} from "./Formulations/formulations.component"
import {PortsComponent} from "./Ports/ports.component";
import {ConsigneesComponent} from "./Consignees/consignees.component";
import {AuthGuard} from "./Login/auth-gruard.service";
import {UnauthorizedComponent} from "./Auth/unauthorized.component"


const routes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'vars', component: VarsComponent,
    children:[
      {path: '', component: ProductsComponent, canActivate: [AuthGuard]},
      {path: 'products', component: ProductsComponent},
      {path: 'buyers', component: BuyersComponent},
      {path: 'consignees', component: ConsigneesComponent},
      {path: 'countries', component: CountriesComponent},
      {path: 'formulations', component: FormulationsComponent},
      {path: 'packages', component: PackagesComponent},
      {path: 'ports', component: PortsComponent}
    ]},
  {path: 'login', component: LoginComponent},
  {path: 'deals', component: DealComponent},
  {path: 'unauthorized', component: UnauthorizedComponent}

  ];

@NgModule({
  imports:[
    RouterModule.forRoot(routes,{ enableTracing: true } )
  ],
  exports:[RouterModule]
})

@Injectable()
export class AppRoutesModule{}
