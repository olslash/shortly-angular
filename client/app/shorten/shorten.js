angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.link.url = "";
  $scope.addLink = function(link){
    console.log(link);
    $scope.loading = true;
    Links.post(link)
    .then(function(response){
      $scope.newLink = response.data;
      $scope.loading = false;
    });
  };
});
