const Profile = require("../../models/Profile");
const { createProfileValidation } = require("../../services/Validation");
const Response = require("@avv-2301/gamers-vault-common");
const Constant = require("@avv-2301/gamers-vault-common");
const { callService } = require("@avv-2301/gamers-vault-common");

module.exports = {
  /**
   * @description This function is used to create profile
   * @param req
   * @param res
   */
  createProfile: async (req, res) => {
    try {
      const requestParams = req.body;
      // console.log(requestParams, "PROFILE PARAMS");

      if (
        !requestParams?.userId ||
        !requestParams?.name ||
        !requestParams?.email
      ) {
        return Response.errorResponseData(
          res,
          "Missing required fields",
          Constant.STATUS_CODES.BAD_REQUEST
        );
      }

      createProfileValidation(requestParams, res, async (validate) => {
        if (validate) {
          // Create library for user
          const libraryCreation = await callService(
            "library",
            "/create-library",
            { userId: requestParams?.userId },
            { "x-internal-call": "true" },
            "POST"
          );

          const libraryId = libraryCreation?.data?._id; // getting library id

          let profileObj = {
            userId: requestParams?.userId,
            name: requestParams?.name,
            quote: null,
            profilePhoto: `https://api.dicebear.com/9.x/pixel-art/svg?seed=${requestParams?.name}`,
            rank: 1,
            level: 1,
            profileType: Constant.PROFILE_TYPE.PUBLIC,
            library: libraryId,
          };

          const profileCreation = await Profile.create(profileObj);

          return Response.successResponseData(
            res,
            profileCreation,
            Constant.STATUS_CODES.CREATED,
            "Profile created"
          );
        }
      });
    } catch (error) {
      console.log(error);
      return Response.errorResponseData(
        res,
        error.message,
        Constant.STATUS_CODES.INTERNAL_SERVER
      );
    }
  },
};
