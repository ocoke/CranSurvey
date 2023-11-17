import checkToken from "~/src/functions/checkToken"

export default eventHandler(async (event) => {
	const storage = useStorage("cransurvey")
    const cfg: object = await storage.getItem("cfg")
    return {
        code: 0,
        msg: "Success.",
        data: cfg.site || {},
    }
})
