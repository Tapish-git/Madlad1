import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MastheadComponent } from './masthead/masthead.component';
import { EmotionspageComponent } from './emotionspage/emotionspage.component';
import { PlacardComponent } from './placard/placard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MastheadComponent,
    EmotionspageComponent,
    PlacardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
