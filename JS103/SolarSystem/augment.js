var SolarSystem = (function(solarsystem){
	var closestStars = [];
	var estimatedAge = 0;
	var knownDwarfs = [];

	solarsystem.setClosestStars = function(){
		for (var i = 0; i < arguments.length; i++){
      closestStars.push(arguments[i]);
    }
	},
	solarsystem.getClosestStars = function(){
		return closestStars;
	},
	solarsystem.setEstimatedAge = function(yrs){
		estimatedAge = yrs;
	},
	solarsystem.getEstimatedAge = function(){
		return estimatedAge;
	},
	solarsystem.setKnownDwarfs = function(dwarfs){
		for (var i = 0; i < arguments.length; i++){
			knownDwarfs.push(arguments[i]);
		}
	},
	solarsystem.getKnownDwarfs = function(){
		return knownDwarfs;
	}

	return solarsystem
})(SolarSystem);

$(document).ready(function(){
	var output = $('#output');
	SolarSystem.setClosestStars("Proxima Centauri", "Rigil Kentaurus", "Barnard's Star", 'Wolf 359', 'Luyten 726-8A');
	SolarSystem.setEstimatedAge("5,000,000,000 years");
	SolarSystem.setKnownDwarfs("Ceres", "Pluto", "Eris", "Makemake", "Haumea");
	var cloStar = SolarSystem.getClosestStars();
	var estAge = SolarSystem.getEstimatedAge();
	var knoDwar = SolarSystem.getKnownDwarfs();
	output.append('<div class="stars radial metal"><h2>Closest stars to our solar system</h2>');
  for (var i = 0; i < cloStar.length; i++){
    output.append("<p>" + cloStar[i] + "</p>");
  }
  output.append('<div class="dwarfs radial metal"><h2>Dwarf planets in our solar system</h2>');
  for (var i = 0; i < knoDwar.length; i++){
    output.append("<p>" + knoDwar[i] + "</p>");
  }
   output.append('<div class="age radial metal"><h2>Age of our solar system</h2></div><p>' + estAge + '</p>');

})