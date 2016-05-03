// Create a new JS file for the solar system application that augments the
// SolarSystem module you created in the initial JS file. You can make any
// getters, setters, or other functions you'd like for your public interface.
// Here are a couple of geeky examples:
// - Getter for an array of closest 5 stars to the solar system.
// - Getter/setter for the estimated age of the solar system in earth years.
// (Nothing fancy, just a number like var age = 5,000,000,000)
// - Getter/setter for array of known dwarf planets.
var SolarSystem = (function(origSolar){
	var alienFriends = ["Alf", "E.T.", "Prince", "David Bowie", "Gonzo", "Dana Scully"];
	origSolar.setAlien = function(alien) {
		alienFriends.push(alien);
	};
	origSolar.getAliens = function(){
		return alienFriends;
	};
	return origSolar;
})(SolarSystem);
console.log(SolarSystem);
