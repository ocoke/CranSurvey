import checkToken from "~/src/functions/checkToken"
export default eventHandler(async (event) => {
    const storage = useStorage("cransurvey")
	const { uniqueId, userId, token } = await readBody(event)
	const _ans: object = await storage.getItem("ans")
	if (!uniqueId) {
		return {
			code: 1001,
			msg: "Invalid parameters.",
		}
	}
    if (!token || !(await checkToken(token))) {
		return {
			code: 2001,
			msg: "Invalid token.",
		}
	}
	const ans = _ans[uniqueId]
	if (!ans) {
		return {
			code: 2002,
			msg: "Database Error.",
		}
	}
})