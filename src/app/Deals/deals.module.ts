import {NgModule} from '@angular/core'
import {HttpModule} from "@angular/http"
import {BrowserModule} from "@angular/platform-browser"

import {FormsModule} from "@angular/forms";
import {CreateDealComponent} from "./Create/create-deal.component";
import {DealComponent} from "./deals.component";


@NgModule({
  declarations: [
   CreateDealComponent,
    DealComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [],
  exports: [DealComponent]
})


export class DealsModule { }
