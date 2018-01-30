export interface ApiStructure {
    artist: ArtistMethods;
}

interface ArtistMethods {
    getTopTracks: Function,
    search: Function,
}

export interface Artist {
    name: string,
    url: string,
    image: string,
}

export interface Track {
    playcount: number,
    listeners: number,
    url: string,
    img: string,
}


export interface SearchArtistResponse {
    results: SearchArtistResponseResults,
}

interface SearchArtistResponseResults {
    artistmatches: ArtistMatches,
}

interface ArtistMatches{
    artist: Artist[],
}