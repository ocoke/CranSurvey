// get users list
import checkToken from "~/src/functions/checkToken"
export default eventHandler(async (event) => {
	const storage = useStorage("cransurvey")
	const { token } = await readBody(event)
	if (!token) {
		return {
			code: 1001,
			msg: "Invalid parameters.",
		}
	}
	if (await checkToken(token)) {
		const users: object = await storage.getItem("usr")

		const list: object = []
		const admins: object = []
		let count: number = 0

		for (const i in users) {
			list.push(i)
			if (users[i]["admin"]) {
				admins.push(i)
			}
			count++
		}

		return {
			code: 0,
			msg: "Success.",
			list,
			admins,
			count,
		}
	} else {
		return {
			code: 2001,
			msg: "Invalid token.",
		}
	}
})
