/**
 * SampleModel.ts
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
export class SampleModel {
	attributes: any = {
    name: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true
    }
  }
}