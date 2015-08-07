var SolarSystem = (function() {
  var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Neptune", "Uranus", "Pluto"];
  var planetsExplored = 0;
  var spaceCraft = [];

  return {
    lastModified_date: new Date(),
    getPlanets: function() {
      return planets;
    },
    setPlanetsExplored: function(num) {
      planetsExplored = num;
    },
    getPlanetsExplored: function() {
      return planetsExplored;
    },
    setSpaceCraft: function() {
      for (var i = 0; i < arguments.length; i++){
        spaceCraft.push(arguments[i]);
      }
    },
    getSpaceCraft: function() {
      return spaceCraft;
    }
  };
})();

$(document).ready(function(){
  var output = $('#output');
  SolarSystem.setPlanetsExplored(4);
  var planetPool = SolarSystem.getPlanets();
  var exploredPool = SolarSystem.getPlanetsExplored();
  var craftPool = SolarSystem.getSpaceCraft();
  SolarSystem.setSpaceCraft("Spirit", "Messenger", "Venus Express", "Akatsuki", "LRO", "Artemis" );
  output.append('<div class="planets"><h2>Planets in our solar system</h2>');
  for (var i = 0; i < planetPool.length; i++){
    output.append("<p>" + planetPool[i] + "</p>");
  }
  output.append('<div class="craft"><h2>Current probes exploring the solar system</h2>');
  for (var i = 0; i < craftPool.length; i++){
    output.append("<p>" + craftPool[i] + "</p></div>");
  }
  output.append("<div class='explored'><h2>Number of planets explored</h2></div>" + "<p>" + exploredPool + "</p>")
})