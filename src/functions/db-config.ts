

// import cloudflareKVBindingDriver from "unstorage/drivers/cloudflare-kv-binding";
// import fsDriver from "unstorage/drivers/fs";
// import githubDriver from "unstorage/drivers/github";
// import memoryDriver from "unstorage/drivers/memory";
// import mongodbDriver from "unstorage/drivers/mongodb";



const dbType = process.env.db_name;
let _env = process.env.db_config;


let dbConfObj: object = {
    driver: dbType,
    ...JSON.parse(_env),
};
export default dbConfObj;
