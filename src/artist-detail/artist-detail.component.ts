import { Component } from '@angular/core';

import { ApiService } from '../api/api.service';

@Component({
  selector: 'lastfm-artist',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.scss']
})
export class ArtistDetailComponent { 
    constructor(
        public apiService: ApiService,
    ) {}
}