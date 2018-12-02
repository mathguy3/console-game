const environment = require('./environment');
const util = require('./util.js');
map = {
	padding: 1,
	w: 30,
	h: 30,
	tiles: [[{
		x: 0,
		y: 0,
		dungeonMap: {
			rooms: [[{
				tiles: [[{
					enemies: [{}],
				}]],
			}]],
		},
		type: "",
		features: [{ }],
	}]]
},

map.init = () => {
	const getRandomType = util.genWeightedRand(environment.tileTypes);
	for (let y = 0; y < map.h; y++){
		map.tiles[y] = [];
		for (let x = 0; x < map.w; x++) {
			const type = getRandomType();
			map.tiles[y][x] = {
				x,
				y,
				type,
			};
		}
	}
}

map.render = () => {
	const { tiles } = map;
	const strMap = [];
	for (let x = 0; x < tiles.length; x++) {
		strMap[x] = [];
		for (let y = 0; y < tiles[x].length; y++) {
			strMap[x][y] = environment.tileIcons[tiles[x][y].type];
			process.stdout.write(strMap[x][y] + " ".repeat(map.padding));
		}
		console.log('');
	}
	return strMap;
}

module.exports = map;