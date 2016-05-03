  // Getter for an array of planets that cannot be modified.
  //  Getter/setter for number of planets that humans have landed people
  // 	or robots on.
  //  Public property for holding a last modified date.
  //  Getter/setter for spacecraft currently exploring solar system.
  // 		These should be stored in a private array.
  //  Any other fun/related data that the student wants to add.

  var SolarSystem = (function() {
  	var planets = ["Mercury", "Venus", "Earth", "Jupiter"];
  	var currentSpacecraft = [];
  	var planetsVisited = [];
  	return {
  		getPlanets: function() {
  			return planets;
  		},
  		dateModified: Date.now(),
  		//This is just to show that you can return anything, any key:value pair, not just functions.
  		setPlanetsVisited: function(count) {
  			planetsVisited.push(count);
  		},
  		getPlanetsVisited: function() {
  			return planetsVisited;
  		},
  		setSpacecraft: function(spacecraft) {
  			currentSpacecraft.push(spacecraft);
  			this.dateModified = Date.now();
  		},
  		getSpacecraft: function() {
  			return currentSpacecraft;
  		}
  	};
  })();


console.log(SolarSystem);


  // planets
  // planetsVisited
  // last-modified
  // currentSpacecraft []
