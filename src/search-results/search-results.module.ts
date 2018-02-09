import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SearchResultsComponent } from './search-results.component';
import { FoundBandModule } from '../found-band/found-band.module';

@NgModule({
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        FoundBandModule,
    ],
    declarations: [
        SearchResultsComponent,
    ],
    exports: [
        SearchResultsComponent,
    ],
  })
  export class SearchResultsModule { }
