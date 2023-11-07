// import { decode } from "js-base64"

export default eventHandler(async (event) => {
	const path = event.context.params.path
	// read body in format of blob, read content
	// const body = (await readRawBody(event)).toString().split(",")[1]
	// .split(',')[1]
	// return '<img src="' + body + '">'
	const body = (await readFormData(event)).get("file")
	const resp = await $fetch("https://transfer.sh/" + path, {
		method: "PUT",
		body: body,
	})
	return resp
})
