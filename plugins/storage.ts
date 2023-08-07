import redisDriver from 'unstorage/drivers/redis'
// import dbConfObj from './src/functions/db-config'
import cloudflareKVBindingDriver from "unstorage/drivers/cloudflare-kv-binding";
import fsDriver from "unstorage/drivers/fs";
import githubDriver from "unstorage/drivers/github";
import memoryDriver from "unstorage/drivers/memory";
import mongodbDriver from "unstorage/drivers/mongodb";

const dbType = process.env.db_name
const _env = process.env.db_config
let envObj = {};
try {
  console.log(dbType)
  console.log(_env)
  envObj = JSON.parse(_env);
} catch(e) {
  console.log(e)
}
const dbConfObj: object = envObj || {}

export default defineNitroPlugin(() => {
  const storage = useStorage()
  
  let storageBase = dbType;
  let driver;

  switch (storageBase) {
    case 'cloudflare-kv-binding':
        driver = cloudflareKVBindingDriver(dbConfObj)
        break;
    case 'fs':
        driver = fsDriver(dbConfObj)
        break;
    case 'github':
        driver = githubDriver(dbConfObj)
        break;
    case 'memory':
        driver = memoryDriver(dbConfObj)
        break;
    case 'mongodb':
        driver = mongodbDriver(dbConfObj)
        break;
    case 'redis':
        driver = redisDriver(dbConfObj)
        break;
    default:
        driver = memoryDriver(dbConfObj)
        break;
    }

  // Mount driver
  storage.mount('cransurvey', driver)
})
