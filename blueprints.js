module.exports = {
	items: [{
		name: "",
		cost: { [""]: 0 }, // charged on purchase
		unlock: { [""]: 0, permanent: true, }, // available on conditions
		isUnlocked: false,
	}],
	buildings: [{
		name: "",
		cost: { [""]: 0 },
		gain: { [""]: 0 },
		flag: { -> },
	}],
	teamMembers: [{
		name: "",
		cost: { [""]: 0 }, // charged on purchase
		wage?: { [""]: 0 }, // removed on 'tick'
		gain?: { [""]: 0 }, // IF wage is met, is added to inventory
		flag?: { -> },
	}],
	mapTiles: [{
		type: "",
		enemy: { -> },
		loot: [{ -> }], // items
		feature: { -> },
	}],
	flag: {
		id: "",
		value: 0,
		unlocks?: [{ -> }], // flags
	},
	enemies: [{
		name: "",
		type: "",
		atk: 0,
		hp: 0,
	}],
	cities: [{
		name: "",
		faction: { -> },
		owned: false,
		size: "",
		type: "",
		buildings: [{ -> }],
		people: [{ -> }],
	}],
	features: [{
		name: "",
		id?: "",
		data: {},
	}],
}
