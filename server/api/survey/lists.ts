// ongoing survey
import checkToken from "~/src/functions/checkToken"
export default eventHandler(async (event) => {
	const storage = useStorage("cransurvey")
	const { token, isdash, search, page, pagesize, sortBy } = await readBody(event)
	if (!token) {
		return {
			code: 1001,
			msg: "Invalid parameters.",
		}
	}
	if (await checkToken(token)) {
		const surveys: object = await storage.getItem("sid")

		let list = []
		let count = 0

		for (const i in surveys) {
			if (surveys[i]["enable"] == true && !isdash) {
				list.push(surveys[i])
				count++
			} else {
				list.push(surveys[i])
				count++
			}
		}

		const sort = sortBy ? sortBy : []

		if (!sort[0]) {
			list.reverse()
		} else if (sort[0].key == "date" && sort[0].order == "desc") {
			list.reverse()
		}

		if (search) {
			list = list.filter((a) => {
				if (a.id.toLowerCase().includes(search.toLowerCase())) {
					return true
				}
				if (
					a.title.toLowerCase().includes(search.toLowerCase()) ||
					a.description.toLowerCase().includes(search.toLowerCase())
				) {
					return true
				}
				return false
			})
		}
		if (page && pagesize) {
			list = list.slice((page - 1) * pagesize, pagesize * page)
		}

		return {
			code: 0,
			msg: "Success.",
			list,
			count,
		}
	} else {
		return {
			code: 2001,
			msg: "Invalid token.",
		}
	}
})
