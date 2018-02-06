import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { ApiStructure, Artist, GetTopTracksResponse, SearchArtistResponse, Track } from './api.structure';

@Injectable()
export class ApiService {
    private baseUrl: string = 'http://ws.audioscrobbler.com/2.0/?method=';
    private apiKey: string = '605e60f866a7c8cb2424cde63736829b';

    isFetching = false;
    foundArtists: Artist[] = [];
    topTracks: Track[] = [];

    private validSearchString: string;

    constructor(private http: HttpClient) { }

    searchArtist(name: string): void {
        this.validSearchString = name;
        const searchUrl: string = this.api.artist.search(name);
        this.http.get<Artist[]>(searchUrl)
            .subscribe(this.gotArtists.bind(this));
        this.isFetching = true;            
    }

    private gotArtists(response: SearchArtistResponse): void {
        if(response.results['@attr'].for === this.validSearchString) {
            this.foundArtists = response.results.artistmatches.artist;
            this.isFetching = false;
        }
    }

    getTopTracks(name: string): Observable<Track[]> {
        const requestUrl: string = this.api.artist.getTopTracks(name);
        this.isFetching = true; 
        return this.http.get<GetTopTracksResponse>(requestUrl)
            .map((resp: GetTopTracksResponse) => {
                this.isFetching = false;      
                return resp.toptracks.track;
            });
    }

    private api: ApiStructure = {
        artist: {
            getTopTracks: (name: string) => `${this.baseUrl}artist.gettoptracks&artist=${name}&api_key=${this.apiKey}&format=json`,
            search: (name: string) => `${this.baseUrl}artist.search&artist=${name}&api_key=${this.apiKey}&format=json`,
        }
    }
}