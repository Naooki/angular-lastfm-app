import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app/app-routing.module';

import {
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
} from '@angular/material';

import { FoundBandComponent } from './found-band.component';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
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