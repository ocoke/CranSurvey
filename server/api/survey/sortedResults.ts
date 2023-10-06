// sorted results
// by date ?date=[timestamp],[timestamp]
// by survey ?survey=[uniqueId]
// by user ?user=[userId]

import checkToken from "~/src/functions/checkToken"
export default eventHandler(async (event) => {
    const storage = useStorage("cransurvey")
	const { uniqueId, userId, date, token } = await readBody(event)
	const _ans: object = await storage.getItem("ans")
    if (!token || !(await checkToken(token))) {
		return {
			code: 2001,
			msg: "Invalid token.",
		}
	}
	const survey: object = await storage.getItem("sid")
	let answers = []
	if (!survey) {
		return {
			code: 2002,
			msg: "Database Error.",
		}
	}
	if (uniqueId) {
		const idList = uniqueId.split(",")
		for (const uniq in idList) {
			const svId = survey[uniq]
			if (!svId) {
				return {
					code: 2002,
					msg: "Database Error.",
				}
			}
			answers.push(..._ans[uniq])
		}
	} else {
		for (const uniq in survey) {
			answers.push(..._ans[uniq])
		}
	}

	if (date) {
		const dateList = date.split(",")
		const start = parseInt(dateList[0])
		const end = parseInt(dateList[1])
		answers = answers.filter((a) => a.time >= start && a.time <= end)
	}
	if (userId) {
		answers = answers.filter((a) => a.usr == userId)
	}

	return {
		code: 0,
		msg: "Success.",
		answers,
		survey: uniqueId,
		user: userId,
		date,
	}
})