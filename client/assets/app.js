var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
    $routeProvider

    .when('/main', {
        templateUrl: '/partials/main.html',
        controller: 'mainController'
    })

    .when('/new', {
        templateUrl: '/partials/new.html',
        controller: 'newController'
    })

    .when('/show/:_id', {
        templateUrl: '/partials/show.html',
        controller: 'editController'
    })

    .when('/edit/:_id', {
        templateUrl: "/partials/edit.html",
        controller: 'editController'
    })

    .otherwise({
        redirectTo: '/main'
    });
});
