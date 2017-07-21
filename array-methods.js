var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");
var x =[];
planets.forEach(function(a) {
	el.innerHTML += a + "<br>";
	x.push(a);
});

// Use the map method to create a new array where the first letter of each planet is capitalized
x.map(function(a,b) {
	x[b]=a[0].toUpperCase()+a.substring(1);

});

// Use the filter method to create a new array that contains planets with the letter 'e'
y =[];
planets.filter(function(a,b,planets) {
		if(planets[b].match("e") !== null) {
			y.push(a);
			y.map(function(a,b) {
				y[b]=a[0].toUpperCase()+a.substring(1);
			});
		}
});


// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var z = words.reduce(function (a, b) {   return a + " " +b; });

document.getElementById("answers").innerHTML += "<h2>First letter capitalized:</h2><br>" + x.join(" ") + `<h2>Excluding planets without the letter "e"</h2><br>` + y.join(" ") + "<h2>Reduced Array to Make Sentence:</h2><br>"+z+".";

