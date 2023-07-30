import initDatabase from "~/src/functions/init-database";
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
    if (await storage.getItem("init") != true) {
        await initDatabase();
        
        let usr = await storage.getItem("usr");
        usr.push({
            id,
            pwd,
        });

        await storage.setItem("usr", usr);

        return {
            code: 0,
            msg: "Success.",
            init: true,
            token: jwt.encode({ id, pwd, }, process.env.JWT_SECRET || "_cransurvey_"),
        }

    } else {
        let usr = await storage.getItem("usr");
        usr.push({
            id,
            pwd,
        });

        await storage.setItem("usr", usr);

        return {
            code: 0,
            msg: "Success.",
            init: false,
            token: jwt.encode({ id, pwd, }, process.env.JWT_SECRET || "_cransurvey_"),
        }
    }
});
  