import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SearchResultsComponent } from './search-results.component';

@NgModule({
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
    ],
    declarations: [
        SearchResultsComponent,
    ],
    exports: [
        SearchResultsComponent,
    ],
  })
  export class SearchResultsModule { }