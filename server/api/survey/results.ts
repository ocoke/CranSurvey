// import { v4 as uuidv4 } from "uuid"
import checkToken from "~/src/functions/checkToken"
export default eventHandler(async (event) => {
	const storage = useStorage("cransurvey")
	const { uniqueId, userId, token, page, pagesize, search, sortBy } = await readBody(event)
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
	const svId = survey[uniqueId]
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
	const total = answers.length

	const sort = sortBy ? sortBy : []

	if (!sort[0]) {
		answers.reverse()
	} else if (sort[0].key == "date" && sort[0].order == "desc") {
		answers.reverse()
	}

	if (search) {
		answers = answers.filter((a) => {
			if (a.usr.toLowerCase().includes(search.toLowerCase())) {
				return true
			}
			if (
				a.geoip[0].toLowerCase().includes(search.toLowerCase()) ||
				a.geoip[1].toLowerCase().includes(search.toLowerCase())
			) {
				return true
			}

			for (const i in a.ans) {
				if (typeof a.ans[i].answer == "string" && a.ans[i].answer.toLowerCase().includes(search.toLowerCase())) {
					return true
				}
				if (svId.questions[i].type == "dropdown" || svId.questions[i].type == "multiple") {
					const ans = svId.questions[i].options.optionsData[Number(a.ans[i].answer)]
					if (typeof ans == "string" && ans.toLowerCase().includes(search.toLowerCase())) {
						return true
					}
				}
			}
			// if () {

			// }
			return false
		})
	}
	if (page && pagesize) {
		answers = answers.slice((page - 1) * pagesize, pagesize * page)
	}

	return {
		code: 0,
		msg: "Success.",
		answers,
		total,
		survey: svId,
	}
})
