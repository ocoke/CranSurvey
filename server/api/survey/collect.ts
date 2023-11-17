import { v4 as uuidv4 } from "uuid"
import ansValidate from "~/src/functions/validate"
import getGeoIp from "~/src/functions/geoip"
import generateWebhookData from "~/src/functions/webhookData"
// import escapeText from "~/src/functions/escape"
export default eventHandler(async (event) => {
	const storage = useStorage("cransurvey")
	const { uniqueId, userId, answers } = await readBody(event)
	const geoip: object = await getGeoIp(event)

	if (!uniqueId || !userId || !answers) {
		return {
			code: 1001,
			msg: "Invalid parameters.",
		}
	}

	const survey: object = await storage.getItem("sid")
	const ans: object = await storage.getItem("ans")
	const svId = survey[uniqueId]

	if (!survey || !svId || !ans) {
		return {
			code: 2002,
			msg: "Database Error.",
		}
	}

	const uniqueAnsId: string = uuidv4()

	for (const i in answers) {
		const q = svId.questions[i]
		if (!q) {
			return {
				code: 3001,
				msg: "Invalid question.",
			}
		}
		if (q.required && !answers[i].answer && answers[i].answer !== 0) {
			return {
				code: 3003,
				msg: "Required question.",
			}
		}
		if (!q.required && !answers[i].answer) {
			continue
		}
		if (q.type == "checkboxes" || q.type == "multiple" || q.type == "dropdown") {
			if (!ansValidate(answers[i].answer, q.type, q.options.optionsData.length)) {
				return {
					code: 3002,
					msg: "Invalid answer.",
				}
			}
		} else if (q.type == "date" || q.type == "file") {
			if (!ansValidate(answers[i].answer, q.type, q.options.optionsData)) {
				return {
					code: 3002,
					msg: "Invalid answer.",
				}
			}
		} else if (!ansValidate(answers[i].answer, q.type, q.validate || "default")) {
			return {
				code: 3002,
				msg: "Invalid answer.",
			}
		}
		q.id = Number(q.id)
		// answers[i].answer = escapeText(answers[i].answer)
	}

	const new_ans = {
		usr: userId,
		ans: answers,
		created_at: new Date().getTime(),
		id: uniqueAnsId,
		geoip: [geoip.city, geoip.country, geoip.region, geoip.region_code, geoip.country_code, geoip.clientIp],
	}

	await storage.setItem("ans", { ...ans, [uniqueId]: [...(ans[uniqueId] || []), new_ans] })

	if (svId.webhook) {
		const webhookData = generateWebhookData(new_ans, uniqueId, "form_response")
		try {
			const webhook = await $fetch(svId.webhook, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					code: 0,
					type: "form_response",
					data: webhookData,
				}),
			})
			if (webhook.code != 0) {
				console.warn("Webhook Error:", webhook)
			}
		} catch (e) {
			console.warn("Webhook Error:", e)
		}
	}
	return {
		code: 0,
		msg: "Success.",
		uid: uniqueAnsId,
	}
})
