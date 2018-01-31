import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
} from '@angular/material';

import { FoundBandComponent } from './found-band.component';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
    ],
    declarations: [
        FoundBandComponent,
    ],
    exports: [
        FoundBandComponent,
    ],
  })
  export class FoundBandModule { }