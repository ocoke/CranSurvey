import requestIp from "request-ip"
export default async function getGeoIp(event) {
	const clientIp: string = requestIp.getClientIp(event.node.req)
	if (!clientIp) {
		return {}
	}
	if (clientIp == "127.0.0.1" || clientIp == "::1" || clientIp == "::ffff:127.0.0.1") {
		return {
			clientIp,
			city: "Local IP",
			country: "Local IP",
			region: "Local IP",
			country_code: "Local",
			region_code: "Local",
		}
	}
	// const geoip: object = await $fetch("https://api.ip.sb/geoip/" + clientIp)
	const geoip: object = await $fetch("https://ipapi.co/" + clientIp + "/json")
	const city = geoip["city"] || "Unknown"
	const country = geoip["country_name"] || "Unknown"
	const region = geoip["region"] || "Unknown"
	const country_code = geoip["country_code"] || "Unknown"
	const region_code = geoip["region_code"] || "Unknown"
	return {
		clientIp,
		city,
		region,
		country,
		region_code,
		country_code,
	}
}
