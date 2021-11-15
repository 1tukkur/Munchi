angular.module('Munchi.services', [])

.factory('Recipes', function() {

  // function outputVal(temp) {
  // Recipes.querySelector('#temperature').value = temp;
  // }
  // Might use a resource here that returns a JSON array
  var recipes = [ { _id: '58a4d11f5f5c73277ba075c1',
    rid: 0,
    stages: {'WarmUp': {'time': 3, 'temp': 190},
              'Cook': {'time': 4, 'temp': 195}},
    KWT: 190,
    tags: { '1': 'coffee', '2': 'hot' },
    name: 'Coffee',
    text: 'How to make coffee',
    summary: 'Load coffee, filter, and water into Munchi',
    time: "7-10 min",
    image: "/img/coffee.jpg" },
  { _id: '58a4d11f5f5c73277ba075c2',
    rid: 2,
    stages: {'WarmUp': {'time': 3, 'temp': 190},
              'Cook': {'time': 5, 'temp': 220}},
    KWT: 190,
    tags: { '1': 'Ramen', '2': 'hot' },
    name: 'Ramen',
    text: 'How to make ramen',
    summary: 'Ramen Noodle Soup',
    time: "3-5 min", 
   image: "/img/ramen.jpeg" },
  { _id: '58a4d11f5f5c73277ba075c4',
    rid: 2,
    stages: {'WarmUp': {'time': 3, 'temp': 190},
              'Cook': {'time': 4, 'temp': 195}},
    KWT: 190,
    tags: { '1': 'Espresso', '2': 'hot' },
    name: 'Espresso', //160 to 165 when drink
    text: 'How to make espresso',
    summary: '2oz of Espresso',
    time: "2-4 min",
    image: "/img/espresso.jpg" },
  { _id: '58a4d11f5f5c73277ba075c5',
    rid: 2,
    stages: {'WarmUp': {'time': 3, 'temp': 170},
              'Cook': {'time': 4, 'temp': 175}},
    KWT: 190,
    tags: { '1': 'Americano', '2': 'hot' },
    name: 'Americano',
    text: 'How to make americano',
    summary: '2 shots of espresso and water',
    time: "2-4 min",
    image: "/img/americano.jpg" }, 
  { _id: '58a4d11f5f5c73277ba075c6',
    rid: 2,
    stages: {'WarmUp': {'time': 3, 'temp': 180},
              'Cook': {'time': 4, 'temp': 185}},
    KWT: 190,
    tags: { '1': 'Mocha', '2': 'hot' },
    name: 'Mocha',
    text: 'How to make Mocha',
    time: "7-10 min",
    summary: '2 shots of espresso, steamed milk, and chocolate',
    image: "/img/chocolatelatte.jpg" },];
    
    var turnOn = {'command': 'Y', 'time': null, 'status': null, 'err': null};
    var turnOff = {'command': 'N', 'time': null, 'status': null, 'err': null};
    var setTemp = {'command': null, 'time':null, 'status': null, 'err': null};
    var cook = {'command': 'cook', 'recipe': 
                                    {'name': null, 'stages': [{'number': null, 'temp': null, 'time': null}],
               'currentStage': null, 'stageTimeRemain': null, 'recipeTimeremain': null, 'err': null}};
    var heat = {'temp': null};
    var cook = {'temp': null, 'time': null};

  return {
    all: function() {
      return recipes;
    },
    turnOn: function(){
        return turnOn;
    },
    turnOff: function(){
      return turnOff;
    },
    setTemp: function(){
      return setTemp;
    },
    cook: function(){
        return cook;
    },
    heat: function(){
      return heat;
  }
  };
});
