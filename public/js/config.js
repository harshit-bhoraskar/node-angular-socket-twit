'use strict';

//Setting up route
angular.module('baseModel').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // For unmatched routes:
        $urlRouterProvider.otherwise('/');
        // states for my app

        $stateProvider
            .state('root', {
                url: '/',
                templateUrl: 'js/modules/twitter/V_Twitter_Topics.html'
            });
    }
]);

//Setting HTML5 Location Mode
angular.module('baseModel').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);