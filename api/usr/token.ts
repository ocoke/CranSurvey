import { checkToken } from '~/src/functions/checkToken';

export default eventHandler(async (event) => {
  const { token } = event.context.params
  if (!token) {
    return {
      code: 1001,
      msg: 'Invalid parameters.'
    }
  }
  if (await checkToken(token)) {
    return {
      code: 0,
      msg: 'Success.'
    }
  } else {
    return {
      code: 2001,
      msg: 'Invalid token.'
    }
  }
})