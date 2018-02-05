import { Component, ViewChild, ElementRef, EventEmitter, Input, Output, Renderer } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

import { ApiService } from '../api/api.service';
import { setTimeout } from 'timers';

@Component({
  selector: 'lastfm-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.scss']
})
export class SearchHeaderComponent {
    isToggledValue: boolean;

    @Input()
    get isToggled() {
        return this.isToggledValue;
    }

    @Output() isToggledChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    set isToggled(val) {
        this.isToggledValue = val;
        this.isToggledChange.emit(this.isToggledValue);
    }


    isSearching: boolean = false;
    onArtistPage: boolean = false;

    private timeoutID: any = null;

    @ViewChild('searchInput') private searchInput: ElementRef; 

    constructor(
        private renderer: Renderer,
        private apiService: ApiService,
        private location: Location,
        private router: Router,
    ) {
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.onArtistPage = event.urlAfterRedirects.includes('/artist-detail');
            }
        });
    }

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

    backToSearch() {
        this.location.back();
    }
}