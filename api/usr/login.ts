import jwt from 'jwt-simple';
export default eventHandler(async (event) => {
    const storage = useStorage();
    const { id, pwd, } = event.context.params;
    if (!id || !pwd) {
        return {
            code: 1001,
            msg: "Invalid parameters.",
        }
    }
    const usr: object = await storage.getItem("usr");
    if (!usr) {
        return {
            code: 2001,
            msg: "Database Error.",
        }
    }
    const user = usr.find((u) => u.id == id);
    if (user && user.pwd == pwd) {
        return {
            code: 0,
            msg: "Success.",
            token: jwt.encode({ id, pwd }, process.env.JWT_SECRET ||  "_cransurvey_"),
        }
    } else {
        return {
            code: 2002,
            msg: "Invalid user.",
        }
    }
});