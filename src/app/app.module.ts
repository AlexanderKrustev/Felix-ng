import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {DealsModule} from "./Deals/deals.module";



import {HomeComponent} from "./Home/home.component";
import {NavbarComponent} from "./NavigarionBar/navbar.component";
import {VarsComponent} from "./Vars/vars.component";
import {AppRoutesModule} from "./routes.module";
import {LoginComponent} from "./Login/login.component";
import {VarsModule} from "./Vars/vars.module";
import {FooterComponent} from "./Footer/footer.component";
import {UnauthorizedComponent} from "./Auth/unauthorized.component";
import {LoaderComponent} from "./Loader/loader.component";

import {AuthService} from "./Login/auth.service";
import {AuthGuard} from "./Login/auth-gruard.service";
import {LoaderService} from "./Loader/loader.service";
import {DataService} from "./Services/data.services";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    VarsComponent,
    LoginComponent,
    FooterComponent,
    UnauthorizedComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    VarsModule,
    FormsModule,
    DealsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    LoaderService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
