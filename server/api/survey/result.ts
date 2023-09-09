// import { v4 as uuidv4 } from "uuid"
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
	const survey: object = await storage.getItem("sid")
	const svId = (survey || []).find((s) => s.id == uniqueId)
	if (!survey || !svId) {
		return {
			code: 2002,
			msg: "Database Error.",
		}
	}
	let answers
	if (userId) {
		answers = ans.filter((a) => a.usr == userId)
	} else {
		answers = ans
	}
	return {
		code: 0,
		msg: "Success.",
		answers,
		survey: svId,
	}
})
