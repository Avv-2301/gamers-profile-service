const Joi = require("joi");
const Response = require("@avv-2301/gamers-vault-common");
const Constant = require("@avv-2301/gamers-vault-common");

module.exports = {
  /**
   * @description This function is used to validate profile creation
   * @param req
   * @param res
   */
  createProfileValidation: (req, res, callback) => {
    const schema = Joi.object({
      name: Joi.string().trim().required(),
      email: Joi.string().email().trim().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return Response.validationErrorResponseData(
        res,
        "All Fields are Required",
        Constant.STATUS_CODES.NOT_ACCEPTABLE
      );
    }
    return callback(true);
  },
};
