import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { FoundBandComponent } from './found-band.component';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
    ],
    declarations: [
        FoundBandComponent,
    ],
    exports: [
        FoundBandComponent,
    ],
  })
  export class FoundBandModule { }