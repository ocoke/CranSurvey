import checkToken from "~/src/functions/checkToken"

export default eventHandler(async (event) => {
	const { token } = await readBody(event)
	const storage = useStorage("cransurvey")
	if (!token) {
		return {
			code: 1001,
			msg: "Invalid parameters.",
		}
	}
	if (await checkToken(token)) {
		const cfg: object = await storage.getItem("cfg")
		return {
			code: 0,
			msg: "Success.",
			data: cfg,
		}
	} else {
		return {
			code: 2001,
			msg: "Invalid token.",
		}
	}
})
