import getGeoIp from "~/src/functions/geoip"
export default eventHandler(async (event) => {
	const { id } = getQuery(event)
	const storage = useStorage("cransurvey")
	const links: object = await storage.getItem("link")
	const geoip: object = await getGeoIp(event)
	if (!links) {
		return {
			code: 2002,
			msg: "Database Error.",
		}
	}
	if (!id) {
		return {
			code: 1001,
			msg: "Invalid Parameters.",
		}
	}
	if (!links[id]) {
		return {
			code: 5001,
			msg: "Link Not Found.",
		}
	}
	if (links[id]["enable"] == false) {
		return {
			code: 5002,
			msg: "Link Disabled.",
		}
	}
	if (links[id]["unavailable_regions"] && links[id]["unavailable_regions"].includes(geoip.country_code)) {
		return {
			code: 5003,
			msg: "Link Unavailable.",
		}
	}
	if (links[id]["type"] == "region") {
		if (links[id]["items"][geoip.country_code]) {
			return {
				code: 0,
				msg: "Success.",
				data: {
					id: links[id]["items"][geoip.country_code],
					region: geoip.country_code,
					title: links[id]["title"],
					description: links[id]["description"],
					default_lang: links[id]["default_lang"],
				},
			}
		} else {
			return {
				code: 0,
				msg: "Success.",
				data: {
					id: links[id]["items"][links[id]["default_item"]],
					region: geoip.country_code,
					title: links[id]["title"],
					description: links[id]["description"],
					default_lang: links[id]["default_lang"],
				},
			}
		}
	}
	if (links[id]["type"] == "language") {
		return {
			code: 0,
			msg: "Success.",
			data: {
				id: links[id]["default_item"],
				ids: links[id]["items"],
				title: links[id]["title"],
				description: links[id]["description"],
				default_lang: links[id]["default_lang"],
			},
		}
	}
})
