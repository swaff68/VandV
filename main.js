var numVictims = prompt("How many disaster victims do you wish to provide info for?");

var vicName = []
var vicPhone = []
var vicStreet = []

var volName = []
var volPhone = []
var volStreet = []



for (var i=0; i<numVictims; i++) {

	vicName.push(prompt("Victim Name (First and Last)"));
	vicPhone.push(prompt("Victim Phone Number"));
	vicStreet.push(prompt("Victim Street Address"));
	 
}

var numVolunteers = prompt("How many volunteers do you wish to provide info for?");

for (var i=0; i<numVolunteers; i++) {

	volName.push(prompt("Volunteer Name (First and Last)"));
	volPhone.push(prompt("Volunteer Phone Number"));
	volStreet.push(prompt("Volunteer Street Address"));
	 
}

alert("There are " + numVictims + " people, that are in need of aid, and " + numVolunteers + " volunteers, that are available to assist." + 
	"\n \n Those that need assisstance are " + vicName + "\n" + "Those that can assist are " + volName);
