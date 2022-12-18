let modInfo = {
	name: "The Dream Tree",
	id: "mymod",
	author: "Endo",
	pointsName: "Dreams",
	modFiles: ["layers.js", "tree.js"],

	discordName: "Dream Tree Server",
	discordLink: "https://discord.gg/Y4Q9E2hU",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.1",
	name: "Dreamtree",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0</h3><br>
		- Added things.<br>
		- Added 1 upgrade.`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade('p', 11)) gain = gain.times(2)
	if (hasUpgrade('p', 12)) gain = gain.times(2)
	if (hasUpgrade('p', 13)) gain = gain.times(1.5)
	if (hasUpgrade('p', 14)) gain = gain.times(upgradeEffect('p', 14))
	if (hasUpgrade('p', 15)) gain = gain.times(1.69)
	if (hasUpgrade('p', 16)) gain = gain.times(3)
	if (hasUpgrade('p', 17)) gain = gain.times(5)
	if (hasUpgrade('p', 18)) gain = gain.times(5)
	if (hasUpgrade('p', 19)) gain = gain.times(2.5)
	if (hasUpgrade('p', 21)) gain = gain.times(2.5)
	if (hasUpgrade('p', 22)) gain = gain.times(3.5)
	if (hasUpgrade('p', 24)) gain = gain.times(3.5)
	if (hasUpgrade('n', 11)) gain = gain.times(5)
	if (hasUpgrade('n', 12)) gain = gain.times(2)	
	if (hasUpgrade('n', 13)) gain = gain.times(1.5)
	if (hasUpgrade('n', 14)) gain = gain.times(2)
	if (hasUpgrade('t', 11)) gain = gain.times(69)
	if (hasUpgrade('t', 12)) gain = gain.times(42.0)
	if (hasUpgrade('t', 13)) gain = gain.times(upgradeEffect('t', 13))
	if (hasUpgrade('h', 11)) gain = gain.times(5)




	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}