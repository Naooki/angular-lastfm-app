import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';

import { ApiModule } from '../api/api.module';
import { SearchHeaderModule } from '../search-header/search-header.module';
import { SearchResultsModule } from '../search-results/search-results.module';

import { AppComponent } from './app.component';
 
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ApiModule,
    SearchHeaderModule,
    SearchResultsModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }