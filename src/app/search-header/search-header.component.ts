import { Component } from '@angular/core';

@Component({
  selector: 'lastfm-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.scss']
})
export class SearchHeaderComponent { 
    isSearching = false;

    constructor() {}

    triggerSearching() {
        this.isSearching = !this.isSearching;
    }
}