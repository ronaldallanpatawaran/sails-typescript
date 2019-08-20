// api/controllers/AuthenticationController.ts
const sails = require('sails');
import * as jwt from "jsonwebtoken";

export function login(req:any, res:any, next: Function) {
  const userName = req.body.userName as string
  const passWord = req.body.passWord as string
  if (!userName || !passWord) {
    return res.badRequest({ message: 'userName and passWord required' })
  }
  const token = jwt.sign({ userName }, sails.config.security.secret) as string;
	return res.ok({ message: 'Successful',  data: { token }});
}

export function validate(req: any, res: any, nex: Function) {
  try {
    const token = req.headers.authorization.trim().split(' ').pop() as string
    const decoded = jwt.verify(token, sails.config.security.secret) as string;
    return res.ok({ message: 'Successful', data: { decoded } })
  } catch (err) {
    return res.badRequest({ message: 'Invalid token' })
  }
}