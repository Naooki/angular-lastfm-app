import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

import { SearchHeaderComponent } from './search-header.component';

@NgModule({
    imports: [
        CommonModule,
        MatInputModule,
    ],
    declarations: [
        SearchHeaderComponent,
    ],
    exports: [
        SearchHeaderComponent,
    ],
  })
  export class SearchHeaderModule { }