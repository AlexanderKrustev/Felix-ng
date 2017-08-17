import {NgModule} from '@angular/core'
import {HttpModule} from "@angular/http"
import {BrowserModule} from "@angular/platform-browser"
import {DatepickerModule} from "ngx-bootstrap"

import {FormsModule} from "@angular/forms";
import {CreateDealComponent} from "./Create/create-deal.component";
import {DealComponent} from "./deals.component";
import {DatePipe} from "@angular/common";


@NgModule({
  declarations: [
   CreateDealComponent,
    DealComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    DatepickerModule.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [],
  exports: [DealComponent]
})


export class DealsModule { }
