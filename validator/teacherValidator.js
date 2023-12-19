const Joi = require('joi');

class TeacherValidator {
  
  static createTeacherValidation(data) {
    const schema = Joi.object({
      name: Joi.string().required(),
      subject: Joi.string().required(),
    });
    return schema.validate(data);
  }
}

module.exports =  TeacherValidator;