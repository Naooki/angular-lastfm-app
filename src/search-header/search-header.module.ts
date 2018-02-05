import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchHeaderComponent } from './search-header.component';

@NgModule({
    imports: [
        CommonModule,
        MatInputModule,
        FormsModule,
    ],
    declarations: [
        SearchHeaderComponent,
    ],
    exports: [
        SearchHeaderComponent,
    ],
  })
  export class SearchHeaderModule { }