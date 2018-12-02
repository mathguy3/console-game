const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const localization = {
	intro: "Let's begin",
	command: "What's next?",
}

var storage = require('./storage.js');

function getParam(str) {
	let sp = str.indexOf(" ");
	sp = sp == -1 ? str.length : sp;
	return { param: str.substr(0, sp), str: str.substr(sp) }	
}

function genWeightedRand(spec) {
  	var i, j, table=[];
  	for (i in spec) {
		for (j=0; j<spec[i]*10; j++) {
			table.push(i);
		}
	}
	console.log(table);
	return function() {
		return table[Math.floor(Math.random() * table.length)];
	}
}

function roll() {
	return !!parseInt(genWeightedRand({0:.5,1:.5})());
}

function developer() {
	const genRand = genWeightedRand({ 0: .5, 3: .5});
	const dict = {};
	for (let i = 5; i < 150; i++) {
		const v = genRand();
		dict[v] = (dict[v] || 0) + 1;
	}
	console.log(dict);
	const genRoll = genWeightedRand({ 0: .5, 1: .5 });
	const rolls = {};
	for (let i = 5; i < 150; i++) {
		const v = genRoll();
		rolls[v] = (rolls[v] || 0) + 1;
	}
	console.log(rolls);
}

async function applyCommand(com) {
	let str = com;
	({ param: act, str } = getParam(str));
	({ param: param1, str } = getParam(str));
	({ param: param2, str } = getParam(str));

	switch (act) {
		case "roll":
			console.log(roll());
		case "get":
			//addToInventory(param1);
			break;
		case "show": 
			if(param1 != "") {
				if (param1 == "i") {
					output(inventory);
				} else {
					output(showables[param1]);
				}
			}
			break;
		case "build":
			/*const result = await tryBuild(param1);
			if (result == "success") {
				console.log(param1, "built!");
				postBuild(param1);
			} else if (result.req) {
				console.log("Sorry, you still need:", result.req);
			} else {
				console.log(result);
			}*/
			break;
		case "where":
		case "loc":
			if (param2 == "i" || act == "loc") {
				output(loc, map[loc.x][loc.y]);
			} else if (param2 == "home") {
				output(home || "You have no home. =(");
			}
			break;
		case "go":
			//await move(param1);
			break;
		case "brrr":
			//output(myself);
		case "weather":
			//output(environment);
			break;
		case "hire":
			/*const res = await tryHire(param1);
			if (res == "success") {
				console.log(param1, "hired!");
				//postBuild(param1);
			} else if (res.needs) {
				console.log("Sorry, you still need:", res.needs);
			} else {
				console.log(res);
			}
*/
			break;
		case "dev~":
			developer();
			break;
		case "quit": 
		case "q":
			output("Goodbye!");
			break;
		default:
			output("What? I didn't understand that.");
	}
	//printLog();
}

const ask = async (q) => {
	let val = "";
	const pr = new Promise(async function(resolve, reject) {
		rl.question(q + ": ", (answer) => {
			val = answer;
			resolve();
		});
	});
	await pr;
	return val; 
}

const output = (str) => {
	console.log(str);
}

async function main() {	
	process.stdout.write('\x1Bc')
	output(localization.intro);
	output(storage);
	//initMap(); 
	//var timerId = setInterval(tick, 1000);
	let shouldQuit = false; 
	while(!shouldQuit) {
		const command = await ask(localization.command);
		await applyCommand(command);
		shouldQuit = command == "quit" || command == "q";
	}
	//clearInterval(timerId);
	rl.close();
}

main();

