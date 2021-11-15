angular.module('Munchi.services', [])

.factory('Recipes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var recipes = [ { _id: '58a4d11f5f5c73277ba075c1',
    rid: 0,
    stages: { '1': ';lkajsdf', '2': 'jfjfjfjf' },
    KWT: 190,
    tags: { '1': 'coffee', '2': 'hot' },
    name: 'Coffee',
    text: 'How to make coffee',
    summary: 'super detailed instructions for machine use to cook, and the user to see how it\'s made' },
  { _id: '58a4d11f5f5c73277ba075c2',
    rid: 2,
    stages: { '1': ';lkajsdf', '2': 'jfjfjfjf' },
    KWT: 190,
    tags: { '1': 'Ramen', '2': 'hot' },
    name: 'Ramen',
    text: 'How to make ramen',
    summary: 'super detailed instructions for machine use to cook, and the user to see how it\'s made' } ];

  return {
    all: function() {
      return recipes;
    }
  };
});
