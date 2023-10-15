import { read } from "fs"
import { v4 as uuidv4 } from "uuid"
import checkToken from "~/src/functions/checkToken"
import escapeText from "~/src/functions/escape"
export default eventHandler(async (event) => {
	const storage = useStorage("cransurvey")
	const { token, uniqueId } = await readBody(event)
	if (!uniqueId) {
		return {
			code: 1001,
			msg: "Invalid parameters.",
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
	if (!token && !(await checkToken(token))) {
		// public
		if (svId.enable) {
			return {
				code: 0,
				msg: "Success.",
				survey: svId,
			}
		}
	} else {
		// private
		return {
			code: 0,
			msg: "Success.",
			survey: svId,
		}
	}
})
