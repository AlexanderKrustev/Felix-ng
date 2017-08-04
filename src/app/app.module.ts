import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from "./Home/home.component";
import {NavbarComponent} from "./NavigarionBar/navbar.component";
import {VarsComponent} from "./Vars/vars.component";
import {AppRoutesModule} from "./routes.module";
import {LoginComponent} from "./Login/login.component";
import {VarsModule} from "./Vars/vars.module";
import {DealComponent} from "./Deals/deals.component";
import {FooterComponent} from "./Footer/footer.component";
import {FormsModule} from "@angular/forms";
import {AuthService} from "./Login/auth.service";
import {AuthGuard} from "./Login/auth-gruard.service";
import {UnauthorizedComponent} from "./Auth/unauthorized.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    VarsComponent,
    LoginComponent,
    DealComponent,
    FooterComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    VarsModule,
    FormsModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
