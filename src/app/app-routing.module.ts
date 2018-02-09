import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchResultsComponent } from '../search-results/search-results.component';
import { ArtistDetailComponent } from '../artist-detail/artist-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: SearchResultsComponent },
    { path: 'artist-detail/:name', component: ArtistDetailComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
