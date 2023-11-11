import requestIp from "request-ip"
export default eventHandler(async (event) => {
	const clientIp = requestIp.getClientIp(event.node.req)
	if (!clientIp) {
		return "Could not get client IP"
	}
	const geoip: object = await $fetch("https://api.ip.sb/geoip/" + clientIp)
	const city = geoip["city"] || "Unknown"
	const country = geoip["country"] || "Unknown"
	const region = geoip["region"] || "Unknown"
	const country_code = geoip["country_code"] || "Unknown"
	const region_code = geoip["region_code"] || "Unknown"
	return {
		clientIp,
		city,
		country,
		region,
		country_code,
	}
})
