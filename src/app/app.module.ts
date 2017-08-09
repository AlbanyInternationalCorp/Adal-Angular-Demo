import { adalConfig } from './../secret';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdalModule } from "adal-angular-ts";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdalModule.forRoot(adalConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
