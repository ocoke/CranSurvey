export default eventHandler(async (event) => {
	const { sid, domain } = getQuery(event)
	const storage = useStorage("cransurvey")
	const survey: object = await storage.getItem("sid")
	if (sid) {
		// Specific survey
		return {
			code: 0,
			msg: "Success.",
			data: [survey[sid]],
		}
	} else if (!sid && domain) {
		// Specific domain
		let list: object = []
		for (const i in survey) {
			let surveyDomain = survey[i]["site"]["domain"] || ""
			if (surveyDomain.includes(',')) {
				surveyDomain = surveyDomain.split(',')
			} else {
				surveyDomain = [surveyDomain]
			}
			if (surveyDomain.includes(domain)) {
				list.push(survey[i])
			}
		}
		return {
			code: 0,
			msg: "Success.",
			data: list,
		}
	} else {
		return {
			code: 1001,
			msg: "Invalid parameters.",
		}
	}
})
