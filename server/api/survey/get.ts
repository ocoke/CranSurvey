import checkToken from "~/src/functions/checkToken"
export default eventHandler(async (event) => {
	const storage = useStorage("cransurvey")
	const req = await readBody(event)

	if (!req.uniqueId) {
		return {
			code: 1001,
			msg: "Invalid parameters.",
		}
	}
	const survey: object = await storage.getItem("sid")
	const svId = survey[req.uniqueId]
	if (!survey || !svId) {
		return {
			code: 2002,
			msg: "Database Error.",
		}
	}
	if (!req.token) {
		// public
		if (svId.enable) {
			return {
				code: 0,
				msg: "Success.",
				survey: svId,
			}
		}
	} else if (await checkToken(req.token)) {
		// private
		return {
			code: 0,
			msg: "Success.",
			survey: svId,
		}
	} else {
		return {
			code: 2001,
			msg: "Invalid token.",
		}
	}
})
