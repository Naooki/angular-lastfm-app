import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchHeaderModule } from './search-header/search-header.module';

import { AppComponent } from './app.component';
 
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SearchHeaderModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }