import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ApiStructure, Artist, Track } from './api.structure';

@Injectable()
export class ApiService {
    private baseUrl: string = 'http://ws.audioscrobbler.com/2.0/?method=';
    private apiKey: string = '605e60f866a7c8cb2424cde63736829b';

    isFetching: boolean = false;
    foundArtists: Artist[] = [];
    topTracks: Track[] = [];

    constructor(private http: HttpClient) { }

    searchArtist(name: string):void {
        const searchUrl: string = this.api.artist.search(name);
        this.isFetching = true;
        this.http.get<Artist[]>(searchUrl)
            .subscribe(this.gotArtists);
    }

    private gotArtists(artists: Artist[]) {
        this.foundArtists = artists;
        console.log(this.foundArtists);
    }

    private api: ApiStructure = {
        artist: {
            getTopTracks: (name: string) => `${this.baseUrl}artist.search&artist=${name}&api_key=${this.apiKey}&format=json`,
            search: (name: string) => `${this.baseUrl}artist.search&artist=${name}&api_key=${this.apiKey}&format=json`,
        }
    }
}