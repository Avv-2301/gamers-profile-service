const Profile = require("../../models/Profile");
const { createProfileValidation } = require("../../services/Validation");
const Response = require('@avv-2301/gamers-vault-common');
const Constant = require('@avv-2301/gamers-vault-common');

module.exports = {
  /**
   * @description This function is used to create profile
   * @param req
   * @param res
   */
  createProfile: async (req, res) => {
    try {
      const requestParams = req.body;
      console.log(requestParams, "PROFILE PARAMS");

      if (
        !requestParams?.userId ||
        !requestParams?.name ||
        !requestParams?.email
      ) {
        return Response.errorResponseData(
          res,
          "Missing required fields",
          Constant.BAD_REQUEST
        );
      }
      createProfileValidation(requestParams, res, async (validate) => {
        if (validate) {
          // const libraryCreation = await axios.post("", {
          //   userId: requestParams?.userId,
          // }); //creating user library

          // const libraryId = libraryCreation?.data?._id; //geting library id

          let profileObj = {
            userId: requestParams?.userId,
            name: requestParams?.name,
            quote: null,
            profilePhoto: `https://api.dicebear.com/9.x/pixel-art/svg?seed=${requestParams?.name}`,
            rank: 1,
            level: 1,
            profileType: Constant.PROFILE_TYPE.PUBLIC,
            library: 1234,
          };

          const profileCreation = await Profile.create(profileObj);

          return Response.successResponseData(
            res,
            profileCreation,
            Constant.CREATED,
            "Profile created"
          );
        }
      }
    );
    } catch (error) {
      console.log(error);
      return Response.errorResponseData(
        res,
        error.message,
        Constant.INTERNAL_SERVER
      );
    }
  },
};
