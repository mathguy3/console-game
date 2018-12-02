module.exports = {
	worlds: [{
		location: { x: 0, y: 0 },
		cities:[{
			name: "",
			location: { x: 0, y: 0 },
			buildings:[{ -> }],
			people: [{ -> }],
		}],
		map: {
			w: 100,
			h: 100,
			tiles: [[{
				x: 0,
				y: 0,
				enemies: [{ -> }],
				type: "",
				features: [{ -> }],
			}]]
		},
	}],
}
