'use strict';

angular.module('listeNaissanceApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  })
  .filter('urlencode', function() {
    return window.encodeURIComponent;
  });
