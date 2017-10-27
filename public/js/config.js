'use strict';

//Setting up route
angular.module('baseModel').config(['$ocLazyLoadProvider', '$stateProvider', '$urlRouterProvider',
    function($ocLazyLoadProvider, $stateProvider, $urlRouterProvider) {
        // For unmatched routes:
        $urlRouterProvider.otherwise('/');

        $ocLazyLoadProvider.config({
            'debug': true, // For debugging 'true/false'
            'events': true, // For Event 'true/false'
            'modules': [{ // Set modules initially
                name: 'topic',
                files: [
                    'js/modules/twitter/topic/C_Twitter_Topics.js',
                    'js/modules/twitter/topic/F_Twitter_Topics.js',
                    'js/modules/twitter/topic/topic.css'
                ],
            }, {
                name: 'tweet',
                files: [
                    'js/modules/twitter/tweet/C_Twitter_Tweets.js',
                    'js/modules/twitter/tweet/tweet.css'
                ]
            }]
        });

        // states for my app
        $stateProvider
            .state('topic', {
                url: '/',
                controller: 'CTwitterTopic', // This view will use AppCtrl loaded below in the resolve
                templateUrl: 'js/modules/twitter/topic/V_Twitter_Topics.html',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('topic'); // Resolve promise and load before view 
                    }]
                }
            }).state('tweet', {
                url: '/tweet/:q',
                controller: 'CTwitterTweet', // This view will use AppCtrl loaded below in the resolve
                templateUrl: 'js/modules/twitter/tweet/V_Twitter_Tweets.html',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('tweet'); // Resolve promise and load before view 
                    }]
                }
            });
    }
]);

//Setting HTML5 Location Mode
angular.module('baseModel').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);

angular.module('baseModel').constant('config', {
    apiUrl: 'https://your-api.com',
    baseUrl: '/',
    enableDebug: true
});