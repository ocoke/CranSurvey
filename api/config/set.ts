import checkToken from "~/src/functions/checkToken"

export default eventHandler(async (event) => {
	const { token, data } = await readBody(event)
    const storage = useStorage("cransurvey")
	if (!token) {
		return {
			code: 1001,
			msg: "Invalid parameters.",
		}
	}
	if (await checkToken(token)) {
        let cfg: object = await storage.getItem("cfg")
        for (let i in data) {
            cfg[i] = data[i]
        }
        await storage.setItem("cfg", cfg)
		return {
			code: 0,
			msg: "Success.",
            data,
		}
	} else {
		return {
			code: 2001,
			msg: "Invalid token.",
		}
	}
})
