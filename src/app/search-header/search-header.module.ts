import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

import { SearchHeaderComponent } from './search-header.component';

@NgModule({
    imports: [
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