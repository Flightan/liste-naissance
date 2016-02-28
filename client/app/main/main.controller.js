'use strict';

(function() {

class MainController {

  constructor($http) {
    this.$http = $http;
    this.awesomeThings = [];
    this.subject = 'Participation à liste de naissance';

    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
    });
  }

  compute(thing) {
    return Math.ceil(thing.given / thing.amount * 100.0);
  }

  body(thing) {
    return `${thing.name}

    Ma participation: `;
  }
}

angular.module('listeNaissanceApp')
  .controller('MainController', MainController);

})();
