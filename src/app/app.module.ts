import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { ApiModule } from '../api/api.module';
import { SearchHeaderModule } from '../search-header/search-header.module';
import { SearchResultsModule } from '../search-results/search-results.module';
import { ArtistDetailModule } from '../artist-detail/artist-detail.module';

import { AppComponent } from './app.component';
 
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ApiModule,
    SearchHeaderModule,
    SearchResultsModule,
    ArtistDetailModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }