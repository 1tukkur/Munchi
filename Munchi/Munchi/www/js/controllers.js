angular.module('Munchi.controllers', [])

.controller('RecipesCtrl', function($scope, Recipes) {
    $scope.recipes = Recipes.all();
    console.log($scope.recipes);
    $scope.coffee = $scope.recipes[0];
    $scope.ramen = $scope.recipes[1];
    
    
})

.controller('MunchiCtrl', function($scope, $http) {
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
    $scope.turnMunchiOn = function(){
        console.log("turning on...")
    }

});
