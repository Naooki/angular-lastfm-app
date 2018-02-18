import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatProgressSpinnerModule,
    MatIconModule,
    MatListModule,
} from '@angular/material';

import { ArtistDetailComponent } from './artist-detail.component';

@NgModule({
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatListModule,
    ],
    declarations: [
        ArtistDetailComponent,
    ],
    exports: [
        ArtistDetailComponent,
    ],
  })
  export class ArtistDetailModule { }
