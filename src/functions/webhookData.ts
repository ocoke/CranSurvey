export default function generateWebhookData(data: object, id: string, type: string) {
	// const data = {
	// 	usr: userId,
	// 	ans: answers,
	// 	created_at: new Date().getTime(),
	// 	id: uniqueAnsId,
	// 	geoip: [geoip.city, geoip.country, geoip.region, geoip.region_code, geoip.country_code, geoip.clientIp],
	// }

	if (type == "form_response") {
		const resp = {
			type: "form_response",
			form_id: id,
			created_at: data["created_at"],
			usr_id: data["usr"],
			ans_id: data["id"],
			geoip: {
				city: data["geoip"][0],
				country: data["geoip"][1],
				region: data["geoip"][2],
				region_code: data["geoip"][3],
				country_code: data["geoip"][4],
				client_ip: data["geoip"][5],
			},
			answers: data["ans"],
		}
		return resp
	}
}
