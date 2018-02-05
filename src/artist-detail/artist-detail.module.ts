import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatProgressSpinnerModule,
    MatListModule,
    MatIconModule,
} from '@angular/material';

import { ArtistDetailComponent } from './artist-detail.component';

@NgModule({
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        MatListModule,
        MatIconModule,
    ],
    declarations: [
        ArtistDetailComponent,
    ],
    exports: [
        ArtistDetailComponent,
    ],
  })
  export class ArtistDetailModule { }