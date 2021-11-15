angular.module('Munchi.controllers', [])


.controller('RecipesCtrl', function($scope, Recipes, $state) {

    $scope.recipes = Recipes.all();
    console.log($scope.recipes);
    

    $scope.gotoRecipeDetail = function(r){
        $state.go('RecipeDetail',{'name': r.name,'Recipe': r});
    } 
})

.controller('MunchiCtrl', function($scope, $http, Recipes) {
//  $scope.$on('$ionicView.enter', function(e) {
//  });
    $scope.onStatus = 'Munchi Is Off';
    $scope.onButton = "Turn On";
    $scope.MunchiTemp = 60;
    $scope.cookTemp = 60;
    $scope.onFlag = false;
    $scope.cookCommand = Recipes.cook();
    
    $scope.turnMunchiOn = function(){
         //this will be the response from the rPi Api
        if(!$scope.onFlag){
            $http.post('http://localhost:5000/rpi/select', Recipes.turnOn());
            $scope.onStatus = 'Munchi Is On';
            $scope.onButton = 'Turn Off';
            $scope.onFlag = true;
        }
        else if($scope.onFlag){
            $http.post('http://localhost:5000/rpi/select', Recipes.turnOff());
            $scope.onStatus = 'Munchi Is Off';
            $scope.onButton = 'Turn On';
            $scope.onFlag = false;
        }
        else{
            console.log("turn-on-error");
        }
    }
    
    $scope.increaseTemp = function(){
        $scope.cookTemp += 5;
    }
    
    $scope.decreaseTemp = function(){
        $scope.cookTemp -= 5;
    }
    
    $scope.heat = function(temp){
        var message = {'command':{'heat': temp}};
        console.log(Recipes.heat());
        var heatcmd = Recipes.heat();
        heatcmd.temp = temp;
        $http.post('http://localhost:5000/rpi/select', Recipes.heat());
        
    }
    
    $scope.sendCookCmd = function(){
        var min;
        var sec;
        $scope.cookCommand.recipe.stages = [{'number': 1, 'temp': $scope.cookTemp, 'time': this.min+this.sec}]
    }
    
})

.controller('RecipeDetailCtrl', function($scope, $http, $state){
    console.log($state.params);
    $scope.rec = $state.params.Recipe;
    console.log($scope.rec.time);
    console.log($scope.rec.summary);
    $scope.goBack = function(){
        $state.go('Recipes');
    }
    
})

.controller('RecipeProgressCtrl', function($scope, $http, $state){
    
});
    