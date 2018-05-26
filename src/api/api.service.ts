import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
    ApiStructure,
    Artist,
    GetTopTracksResponse,
    SearchArtistResponse,
    Track
} from './api.structure';

@Injectable()
export class ApiService {
    private baseUrl = 'http://ws.audioscrobbler.com/2.0/?method=';
    private apiKey = '605e60f866a7c8cb2424cde63736829b';

    isFetchingArtists = false;
    foundArtists: Artist[] = [];
    topTracks: Track[] = [];

    private validSearchString: string;

    constructor(private http: HttpClient) { }

    searchArtist(name: string): void {
        this.validSearchString = name;
        const searchUrl: string = this.api.artist.search(name);
        this.http.get<Artist[]>(searchUrl)
            .subscribe(this.gotArtists.bind(this));
        this.isFetchingArtists = true;
    }

    private gotArtists(response: SearchArtistResponse): void {
        if (response.results['@attr'].for === this.validSearchString) {
            this.foundArtists = response.results.artistmatches.artist;
            this.isFetchingArtists = false;
        }
    }

    getTopTracks(name: string): Observable<Track[]> {
        const requestUrl: string = this.api.artist.getTopTracks(name);
        return this.http.get<GetTopTracksResponse>(requestUrl).pipe(
            map((resp: GetTopTracksResponse) => {
                return resp.toptracks.track;
            }));
    }

    private api: ApiStructure = {
        artist: {
            getTopTracks: (name: string) =>
            `${this.baseUrl}artist.gettoptracks&artist=${name}&api_key=${this.apiKey}&format=json`,
            search: (name: string) =>
            `${this.baseUrl}artist.search&artist=${name}&api_key=${this.apiKey}&format=json`,
        }
    };
}
