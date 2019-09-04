// api/controllers/SampleController.ts
declare var sails: any;
declare var SampleModel: any;
export async function index (req: any, res: any) {
	const sampleData = await SampleModel.find()
	return res.ok({ message: 'Successful', data: sampleData })
}

export async function add (req: any, res: any) {
  const toBeAdded = req.body
  if (!toBeAdded) {
    return res.badRequest({ message: 'Required fields are missing.' })
  }
  const created = await SampleModel.create(toBeAdded).intercept('E_UNIQUE', ()=>'property name already in used').fetch() // dont forget to fetch
  return res.ok({ message: 'Successful', data: created })
}