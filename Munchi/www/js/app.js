// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('Munchi', ['ionic', 'Munchi.controllers', 'Munchi.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

//$ionicConfigProvider.views.transition('none');
  $stateProvider

  .state('Recipes', {
    url: '/',
    templateUrl: 'templates/Recipes.html',
    controller: 'RecipesCtrl'
    })
  
  .state('RecipeDetail',{
      url: '/Recipes/{name}',
      templateUrl: '/templates/RecipeDetail.html',
      params: {'Recipe': null},
      controller: 'RecipeDetailCtrl',
      
  })
  
  .state('RecipeProgress',{
      url: '/RecipeProgress/{name}',
      params: {Recipe: null},
      templateUrl: '/templates/RecipeProgress.html',
      controller: 'RecipeProgressCtrl'
  })
 
  .state('Munchi', {
      url: '/Munchi',
      templateUrl: 'templates/Munchi.html', 
      controller: 'MunchiCtrl',
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
