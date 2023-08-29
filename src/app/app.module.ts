import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MastheadComponent } from './masthead/masthead.component';
import { EmotionspageComponent } from './emotionspage/emotionspage.component';
import { PlacardComponent } from './placard/placard.component';
import { Masthead2Component } from './masthead2/masthead2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MastheadComponent,
    EmotionspageComponent,
    PlacardComponent,
    Masthead2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
