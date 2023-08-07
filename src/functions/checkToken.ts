import jwt from 'jwt-simple'

export default async function checkToken (token: string) {
  const tk = jwt.decode(token, process.env.JWT_SECRET || '_cransurvey_')
  const storage = useStorage("cransurvey")
  const usr: object = await storage.getItem('usr')
  if (!usr) { return false }
  const user = usr.find(u => u.id == tk.id)
  if (user && user.pwd == tk.pwd) {
    return true
  } else {
    return false
  }
}
