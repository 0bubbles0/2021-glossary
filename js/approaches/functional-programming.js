/*
Functional programming is about:

    Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

    Pure functions - the same input always gives the same output

    Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled
      - don't alter original arr, obj... --> pure function avoides mutation & side effects
*/

// Don't change original:
// The global variable
var fixedValue = 4;

function incrementer(value) {
	// Only change code below this line
	return value + 1;
	// Only change code above this line
}

incrementer(fixedValue);
console.log(fixedValue);

// how call

const prepareGreenTea = () => 'greenTea';
const getTea = (prepareTea, numOfCups) => {
	const teaCups = [];

	for (let cups = 1; cups <= numOfCups; cups += 1) {
		const teaCup = prepareTea();
		teaCups.push(teaCup);
	}
	return teaCups;
};
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);

// Window tabs
// tabs is an array of titles of each site open within the window
var Window = function (tabs) {
	this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
	this.tabs = this.tabs.concat(otherWindow.tabs);
	return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
	this.tabs.push('new tab'); // Let's open a new tab for now
	return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
	// Only change code below this line

	var tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
	var tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab

	this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

	// Only change code above this line

	return this;
};

// Let's create three browser windows
var workWindow = new Window([
	'GMail',
	'Inbox',
	'Work mail',
	'Docs',
	'freeCodeCamp',
]); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
	.tabOpen() // Open a new tab for cat memes
	.join(videoWindow.tabClose(2)) // Close third tab in video window, and join
	.join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
