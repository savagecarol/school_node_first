const Joi = require('joi');

class StudentValidator {

  static createStudentValidation(data) {
    const schema = Joi.object({
      name: Joi.string().required(),
      age: Joi.number().integer().required(),
    });

    return schema.validate(data);
  }
}

module.exports =  StudentValidator;