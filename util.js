module.exports = {
	genWeightedRand: spec => {
		let table = [];
		for (i in spec) {
			for (let j = 0; j < spec[i] * 10; j++) {
				table.push(i);
			}
		}
		return () => {
			return table[Math.floor(Math.random() * table.length)];
		};
	},

	roll: () => {
		return !!parseInt(genWeightedRand({ 0: 0.5, 1: 0.5 })());
	}
};
