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
		let count: number = 0

		for (const i in users) {
			list.push(users[i].id)
            count++
		}

		return {
			code: 0,
			msg: "Success.",
			list,
			count,
		}
	} else {
		return {
			code: 1002,
			msg: "Invalid token.",
		}
	}
})
