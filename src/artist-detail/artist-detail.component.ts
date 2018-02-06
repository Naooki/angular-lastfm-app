import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../api/api.service';
import { Track } from '../api/api.structure';

@Component({
  selector: 'lastfm-artist',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.scss']
})
export class ArtistDetailComponent implements OnInit {
    public topTracks: Track[];

    constructor(
        public apiService: ApiService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.getDetails();
    }

    private getDetails(): void {
        const name = this.route.snapshot.paramMap.get('name');
        this.apiService.getTopTracks(name)
            .subscribe((tracks: Track[]) => {
                this.topTracks = tracks;
            });
    }
}