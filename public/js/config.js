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
                    name: 'site',
                    files: [
                        'js/modules/site/M_Site.js',
                        'js/modules/site/D_Site.js',
                        'js/modules/site/site.css'
                    ]
                },
                {
                    name: 'topic',
                    files: [
                        'js/modules/twitter/topic/M_Twitter_Topics.js',
                        'js/modules/twitter/topic/C_Twitter_Topics.js',
                        'js/modules/twitter/topic/F_Twitter_Topics.js',
                        'js/modules/twitter/topic/topic.css'
                    ],
                }, {
                    name: 'tweet',
                    files: [
                        'js/modules/twitter/tweet/M_Twitter_Tweets.js',
                        'js/modules/twitter/tweet/C_Twitter_Tweets.js',
                        'js/modules/twitter/tweet/F_Twitter_Tweets.js',
                        'js/modules/twitter/tweet/tweet.css'
                    ]
                }
            ]
        });

        // states for my app
        $stateProvider
            .state('topic', {
                url: '/',
                controller: 'CTwitterTopic',
                templateUrl: 'js/modules/twitter/topic/V_Twitter_Topics.html',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(['site', 'topic'], { serie: true }); // Resolve promise and load before view 
                    }]
                }
            }).state('tweet', {
                url: '/tweet?tn',
                controller: 'CTwitterTweet',
                templateUrl: 'js/modules/twitter/tweet/V_Twitter_Tweets.html',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(['site', 'tweet'], { serie: true }); // Resolve promise and load before view 
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

angular.module('baseModel').constant("config", {
    twitApiBaseUrl: "api/twit/" // module based API base path
});