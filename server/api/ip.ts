import requestIp from "request-ip"
export default eventHandler(async (event) => {
	const clientIp = requestIp.getClientIp(event.node.req)
    return clientIp
})
