import jwt from 'jwt-simple'
import initDatabase from '~/src/functions/init-database'
export default eventHandler(async (event) => {
  const storage = useStorage("cransurvey")
  const { id, pwd } = await readBody(event)
  if (!id || !pwd) {
    return {
      code: 1001,
      msg: 'Invalid parameters.'
    }
  }
  if (await storage.getItem('init') != true) {
    await initDatabase()

    const usr = await storage.getItem('usr')
    usr.push({
      id,
      pwd
    })

    await storage.setItem('usr', usr)

    return {
      code: 0,
      msg: 'Success.',
      init: true,
      token: jwt.encode({ id, pwd }, process.env.JWT_SECRET || '_cransurvey_')
    }
  } else {
    const usr = await storage.getItem('usr')
    usr.push({
      id,
      pwd
    })

    await storage.setItem('usr', usr)

    return {
      code: 0,
      msg: 'Success.',
      init: false,
      token: jwt.encode({ id, pwd }, process.env.JWT_SECRET || '_cransurvey_')
    }
  }
})
