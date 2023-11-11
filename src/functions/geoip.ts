import requestIp from "request-ip"
export default async function getGeoIp(event) {
	const clientIp: string = requestIp.getClientIp(event.node.req)
	if (!clientIp) {
		return {}
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
		region_code,
	}
}
