module.exports = {
	worlds: [{
		location: { x: 0, y: 0 },
		cities:[{
			name: "",
			location: { x: 0, y: 0 },
			buildings:[{ }],
			people: [{ }],
		}],
		map: {
			w: 100,
			h: 100,
			tiles: [[{
				x: 0,
				y: 0,
				enemies: [{ }],
				type: "",
				features: [{ }],
			}]]
		},
	}],
	features: [{ name: "LargeTree" }, { name: "Cave", data: {/* dungeonMap */} }],
	tileTypes: { "forest": .2, "desert": .1, "river": .1, "field": .2, "mountain": .1, "none": .3 },
	tileIcons: { "artifact": "🗿", "oaisis": "🌴", "forest": "🌲", "mountain": "🗻", "desert": "🌵", "city": "🏢", "town": "🏘️", "river": "💧", "field": "🌾", "tent": "⛺", "none": " "}
}
