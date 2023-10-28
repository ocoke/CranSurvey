import checkToken from "~/src/functions/checkToken"
export default eventHandler(async (event) => {
	const storage = useStorage("cransurvey")
	const { token, uniqueId } = await readBody(event)
	if (!token || !uniqueId) {
		return {
			code: 1001,
			msg: "Invalid parameters.",
		}
	}
	if (!(await checkToken(token))) {
		return {
			code: 2001,
			msg: "Invalid token.",
		}
	}
	const survey: object = await storage.getItem("sid")
	const svId = survey[uniqueId]
	if (!survey || !svId) {
		return {
			code: 2002,
			msg: "Database Error.",
		}
	}
	delete survey[uniqueId]
	await storage.setItem("sid", survey)
	const ans: object = await storage.getItem("ans")
	delete ans[uniqueId]
	await storage.setItem("ans", ans)
	return {
		code: 0,
		msg: "Success.",
	}
})
