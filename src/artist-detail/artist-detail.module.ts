import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatProgressSpinnerModule,
} from '@angular/material';

import { ArtistDetailComponent } from './artist-detail.component';
import { FoundTrackModule } from '../found-track/found-track.module';

@NgModule({
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        FoundTrackModule,
    ],
    declarations: [
        ArtistDetailComponent,
    ],
    exports: [
        ArtistDetailComponent,
    ],
  })
  export class ArtistDetailModule { }