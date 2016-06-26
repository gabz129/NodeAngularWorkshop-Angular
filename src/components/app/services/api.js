import {bands} from './mock-data';
import {artists} from './mock-data';
import {albums} from './mock-data';
import {tracks} from './mock-data';


export class ApiService {
    url = 'http://localhost:1337/';


    constructor ($http) {
        this.http = $http;
    }

    getBands(){
        /*return this.http.get( url + '/band/all').then(
    	function(response){
    		return response.bands
    	});*/
    	return new Promise(resolve => resolve(bands));
    };

    getBand(bandId){
        /*return this.http.get(url + '/band/' + bandId).then(
    	function(response){
    		return response.band
    	});*/
    	return new Promise(resolve => resolve(bands[bandId]));
    }

    getArtists(){
        /*return this.http.get(url + '/band/' + bandId + '/artist/all').then(
            function(response){
                return response.artists
        });*/
        return new Promise(resolve => resolve(artists));
    }

    getAlbums(){
        /*return this.http.get(url + '/band/' + bandId + '/album/all').then(
            function(response){
                return response.albums
        });*/
        return new Promise(resolve => resolve(albums));
    }

    getTracks(bandId, albumId){
        /*return this.http.get(url + '/band/' + bandId + '/album/' + albumId + '/tracks/all').then(
            function(response){
                return response.tracks
        });*/
        return new Promise(resolve => resolve(tracks));
    }
}
