// ongoing survey
import checkToken from "~/src/functions/checkToken"
export default eventHandler(async (event) => {
	const storage = useStorage("cransurvey")
	const { token, isdash } = await readBody(event)
	if (!token) {
		return {
			code: 1001,
			msg: "Invalid parameters.",
		}
	}
	if (await checkToken(token)) {
		const surveys: object = await storage.getItem("sid")

		const list = []
		let count = 0

		for (const i in surveys) {
			if (surveys[i]["enable"] == true && !isdash) {
				list.push(surveys[i])
				count++
			} else {
				list.push(surveys[i])
				count++
			}
		}

		return {
			code: 0,
			msg: "Success.",
			list,
			count,
		}
	} else {
		return {
			code: 2001,
			msg: "Invalid token.",
		}
	}
})
