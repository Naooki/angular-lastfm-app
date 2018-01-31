import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';

import { ApiService } from '../api/api.service';
import { setTimeout } from 'timers';

@Component({
  selector: 'lastfm-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.scss']
})
export class SearchHeaderComponent { 
    isSearching: boolean = false;
    private timeoutID: any = null;

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
                }, 0);
        }
    }

    onSearchChange(searchValue: string) {
        if(!searchValue) {
            return;
        } else if (!this.apiService.isFetching && !this.timeoutID) {
            this.apiService.searchArtist(searchValue);
            return;
        }
        window.clearTimeout(this.timeoutID);
        this.timeoutID = null;

        this.timeoutID = window.setTimeout(() => {
            this.timeoutID = null;
            this.apiService.searchArtist(searchValue);
        }, 1000);
    }
}