import 'angular-route';

import {bands} from './services/mock-data';



export function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true,
    });

    $routeProvider
        .otherwise('/')
        .when('/', {
            templateUrl: '/components/app/views/index.html',
            resolve: {
                // use resolve to to pass data to the template under $resolve
                //data: () => new Promise(resolve => resolve(bands)), // mock data
                data: (ApiService) => ApiService.getBands(), 
            },
        })
        .when('/band/:bandId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
                // use resolve to to pass data to the template under $resolve
                //band: () => new Promise(resolve => resolve(bands[0])),
                //band: (ApiService) => ApiService.getBand($routeParams.bandId),
                band: (ApiService) => ApiService.getBand(0),
                artists: (ApiService) => ApiService.getArtists(0),
                albums: (ApiService) => ApiService.getAlbums(0),
            },
        })
        .when('/band/:bandId/album/:albumId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
                // use resolve to to pass data to the template under $resolve
                band: (ApiService) => ApiService.getBand(0),
                artists: (ApiService) => ApiService.getArtists(0),
                albums: (ApiService) => ApiService.getAlbums(0),
                tracks: (ApiService) => ApiService.getTracks(0, 0),
            },
        })
        .when('/band/:bandId/album/:albumId/track/:trackId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
                // use resolve to to pass data to the template under $resolve
                band: (ApiService) => ApiService.getBand(0),
                artists: (ApiService) => ApiService.getArtists(0),
                albums: (ApiService) => ApiService.getAlbums(0),
                tracks: (ApiService) => ApiService.getTracks(0, 0),
                comments: (ApiService) => ApiService.getComments(0, 0, 0),
            },
        });
}
