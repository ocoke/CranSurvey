// create survey
import { v4 as uuidv4 } from "uuid"
import checkToken from "~/src/functions/checkToken"
import escapeText from "~/src/functions/escape"
export default eventHandler(async (event) => {
	const storage = useStorage("cransurvey")
	const { token, title, description, questions, type, site } = await readBody(event)
	if (!token || !title || !description || !questions || !type) {
		return {
			code: 1001,
			msg: "Invalid parameters.",
		}
	}
	if (await checkToken(token)) {
		const uniqueId: string = uuidv4()
		const survey: object = await storage.getItem("sid")
		if (!survey) {
			return {
				code: 2002,
				msg: "Database Error.",
			}
		}
		const surveyId = survey.find((s) => s.id == uniqueId)
		if (surveyId) {
			return {
				code: 2003,
				msg: "Survey ID already exists.",
			}
		}
		const new_survey = {
			id: uniqueId,
			title: escapeText(title),
			description: escapeText(description),
			questions,
			created_at: new Date().getTime(),
			type,
			enable: true,
			site,
		}

		await storage.setItem("sid", [...survey, new_survey])

		return {
			code: 0,
			msg: "Success.",
			uid: uniqueId,
		}
	} else {
		return {
			code: 2001,
			msg: "Invalid token.",
		}
	}
})
