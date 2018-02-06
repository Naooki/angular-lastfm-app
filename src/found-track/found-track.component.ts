import { Component, Input } from '@angular/core';

import { Track } from '../api/api.structure';

@Component({
  selector: 'lastfm-found-track',
  templateUrl: './found-track.component.html',
  styleUrls: ['./found-track.scss']
})
export class FoundTrackComponent {
    @Input() track: Track;
    
    constructor() {}
}