// Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 } ];

var newCities= cities.filter(function(city){
        return city.name ;
    });
    console.log(newCities);