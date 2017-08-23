import {NgModule} from '@angular/core'
import {HttpModule} from "@angular/http"
import {BrowserModule} from "@angular/platform-browser"
import {DatepickerModule} from "ngx-bootstrap"

import {FormsModule} from "@angular/forms";
import {CreateDealComponent} from "./Create/create-deal.component";
import {DealComponent} from "./deals.component";
import {DatePipe} from "@angular/common";
import {ShowDealsComponent} from "./Show/show-deals.component";
import {RouterModule} from "@angular/router";
import {ColumnsPickerComponent} from "./ColumnPicker/columns.picker.component";
import {ThComponent} from "./Table Compos/th.component";
import {ShowDealService} from "./Show/show-deal.service";
import {TrComponent} from "./Table Compos/tr.component";


@NgModule({
  declarations: [
    CreateDealComponent,
    DealComponent,
    ShowDealsComponent,
    ColumnsPickerComponent,
    ThComponent,
    TrComponent,

  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    DatepickerModule.forRoot()
  ],
  providers: [
    DatePipe,
    ShowDealService
  ],
  bootstrap: [],
  exports: [ShowDealsComponent]
})


export class DealsModule { }
