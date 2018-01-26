import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';

import { ApiService } from '../api/api.service';

@Component({
  selector: 'lastfm-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.scss']
})
export class SearchHeaderComponent { 
    isSearching = false;
    @ViewChild('searchInput') private searchInput: ElementRef; 

    constructor(
        private renderer: Renderer,
        private apiService: ApiService,
    ) {}

    triggerSearching() {
        this.isSearching = !this.isSearching;
        if (this.isSearching) {
            setTimeout(() => { 
                this.renderer.invokeElementMethod(
                    this.searchInput.nativeElement, 'focus', []);
                }
            );
        }
    }

    onSearchChange(searchValue: string) {
        this.apiService.searchArtist(searchValue);
    }
}