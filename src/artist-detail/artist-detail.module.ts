import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ArtistDetailComponent } from './artist-detail.component';

@NgModule({
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
    ],
    declarations: [
        ArtistDetailComponent,
    ],
    exports: [
        ArtistDetailComponent,
    ],
  })
  export class ArtistDetailModule { }