// источник: https://www.airpair.com/angularjs/posts/angularjs-from-prototyping-to-functional-code

angular.module('clientsApp', []);

// scripts/factories/clients
// angular
//   .module('clientsApp')
//   .factory('Clients', function($http) {
//     var BASE_URL = new Firebase('https://luminous-heat-9446.firebaseio.com/');
//     // var BASE_URL = '/clients'; 
//     return {
//       all: function() {
//         return $http.get(BASE_URL);
//       },
//       create: function(client) {
//         return $http.post(BASE_URL, client);
//       },
//       update: function(client) {
//         return $http.put(BASE_URL + '/' + client.id, client);
//       },
//       delete: function(id) {
//         return $http.delete(BASE_URL + '/' + id);
//       }
//     };
//   });

angular
  .module('clientsApp', ['ui.bootstrap'])
  .controller('ClientsCtrl', function($scope,$http) {

  	  $http.get("https://api.myjson.com/bins/1edijl").then(function (response) {
        $scope.myWelcome = response.data;
        console.log(response.data);
    });

    $scope.showModal = false;
  
    $scope.clients = [
    {"firstName":"John","lastName":"Doe","age":"30","employer":"Google","joiningDate":"21-07-2017","location":"Texas","id":1},
    {"firstName":"Vito","lastName":"Corleone","age":"21","employer":"Tesla","joiningDate":"09-09-2007","location":"Dallas","id":2},
    {"firstName":"Indiana","lastName":"Jones","age":"65","employer":"Apple","joiningDate":"05-01-2008","location":"California","id":3},
    {"firstName":"Robin","lastName":"Hood","age":"34","employer":"Shell","joiningDate":"21-05-2009","location":"Alabama","id":4},
    {"firstName":"Ethan","lastName":"Hunt","age":"28","employer":"Exxon","joiningDate":"22-06-2010","location":"Missouri","id":5},
    {"firstName":"Forrest","lastName":"Gump","age":"49","employer":"Walmart Labs","joiningDate":"23-07-2011","location":"Utah","id":6},
    {"firstName":"Willy","lastName":"Wonka","age":"61","employer":"Wipro","joiningDate":"24-08-2012","location":"Florida","id":7},
    {"firstName":"Captain","lastName":"Quint","age":"18","employer":"CTS","joiningDate":"25-09-2013","location":"Mexico","id":8},
    {"firstName":"Rocky","lastName":"Balboa","age":"27","employer":"TCS","joiningDate":"26-10-2014","location":"Mumbai","id":9},
    {"firstName":"Tom","lastName":"Powers","age":"39","employer":"Zoho","joiningDate":"27-11-2015","location":"Bangalore","id":10},
    {"firstName":"Harry","lastName":"Potter","age":"40","employer":"Thoughtworks","joiningDate":"28-12-2016","location":"Delhi","id":11}
    ];


    $scope.delete = function(client) {
      var index = $scope.clients.indexOf(client);
      $scope.clients.splice(index, 1);
    };

    $scope.create = function() {
      $scope.newClient.id = $scope.clients.length + 1;
      $scope.clients.push($scope.newClient);
      $scope.newClient = null;
    };



    $scope.edit = function(client) {
     // $scope.activeClient = client;
     $scope.showModal = true;
    };
    // $scope.update = function(client) {
    //   $scope.activeClient = null;
    // };
  });

// scripts/directives/integer.coffee 
var INTEGER_REGEXP = /^\-?\d+$/;
angular.module('clientsApp').directive('integer', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.integer = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) return true;
        if (INTEGER_REGEXP.test(viewValue)) return true;
        return false;
      };
    }
  };
});

// $(function() {
//   $('#clientTable').floatThead({
//     scrollContainer: function($table) {
//       return $table.closest('.table-wrap');
//     }
//   });
// });