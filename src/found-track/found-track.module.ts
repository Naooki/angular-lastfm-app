import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
} from '@angular/material';

import { FoundTrackComponent } from './found-track.component';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
    ],
    declarations: [
        FoundTrackComponent,
    ],
    exports: [
        FoundTrackComponent,
    ],
  })
  export class FoundTrackModule { }