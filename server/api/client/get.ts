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
		const list: object = []
		for (const i in survey) {
			let surveyDomain = survey[i]["site"]["domain"] || ""
			if (surveyDomain.includes(",")) {
				surveyDomain = surveyDomain.split(",")
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
		const list: object = []
		for (const i in survey) {
			const surveyDomain = survey[i]["site"]["domain"] || ""
			if (surveyDomain == "") {
				list.push(survey[i])
			}
		}
		return {
			code: 0,
			msg: "Success.",
			data: list,
		}
	}
})
