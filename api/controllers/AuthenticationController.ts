// api/controllers/AuthenticationController.ts
declare var sails: any;
import * as jwt from "jsonwebtoken";

export function login(req:any, res:any, next: Function) {
	try {
    const userName = req.body.userName as string
    const password = req.body.password as string
    const token = jwt.sign({ userName }, 'shhhhh') as string;
		return res.bad({ message: 'Successful',  data: { token }});
	} catch (err) {
		return res.badRequest({ message: err.message })
	}
}

export function validate(req: any, res: any, nex: Function) {
  const token = req.body.token as string
  try {
    var decoded = jwt.verify(token, 'shhhhh') as string;
    return res.ok({ message: 'Successful', data: { decoded } })
  } catch(err) {
    return res.badRequest({ message: err.message })
  }
}