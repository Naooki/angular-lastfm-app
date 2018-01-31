import { Component, Input } from '@angular/core';

import { Artist } from '../api/api.structure';

@Component({
  selector: 'lastfm-found-band',
  templateUrl: './found-band.component.html',
  styleUrls: ['./found-band.scss']
})
export class FoundBandComponent {
    @Input() artist: Artist;
    
    constructor() {}
}