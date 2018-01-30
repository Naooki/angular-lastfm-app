import { Component } from '@angular/core';

import { ApiService } from '../api/api.service';

@Component({
  selector: 'lastfm-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.scss']
})
export class SearchResultsComponent { 
    constructor(
        private apiService: ApiService,
    ) {}
}