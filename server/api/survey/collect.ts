import { v4 as uuidv4 } from "uuid"

export default eventHandler(async (event) => {
	const storage = useStorage("cransurvey")
	const { uniqueId, userId, answers } = await readBody(event)

	if (!uniqueId || !userId || !answers) {
		return {
			code: 1001,
			msg: "Invalid parameters.",
		}
	}

	const survey: object = await storage.getItem("sid")
	const ans: object = await storage.getItem("ans")
	const svId = (survey || []).find((s) => s.id == uniqueId)

	if (!survey || !svId || !ans) {
		return {
			code: 2002,
			msg: "Database Error.",
		}
	}

	const uniqueAnsId: string = uuidv4()

	const new_ans = {
		usr: userId,
		ans: answers,
		created_at: new Date().getTime(),
		id: uniqueAnsId,
	}

	await storage.setItem("ans", { ...ans, [uniqueId]: [...(ans[uniqueId] || []), new_ans] })

	return {
		code: 0,
		msg: "Success.",
		uid: uniqueAnsId,
	}
})
