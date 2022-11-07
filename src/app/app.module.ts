import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

const modules = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  StoreModule.forRoot({}, {})
]

const components = [
  AppComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
