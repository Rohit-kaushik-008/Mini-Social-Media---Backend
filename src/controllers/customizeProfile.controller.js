import { User } from "../models/user.model.js";
import uploadOnCloudinary from "../services/Cloudinary.js";
import { responseHandler } from "../utils/responseHandler.js";

export const customizeProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log("User Id : ", userId);

    const { username, fullname, bio } = req.body;

    const profileImage = req.files?.profileImage?.[0];
    const coverImage = req.files?.coverImage?.[0];

    if (!userId) {
      return responseHandler({
        res,
        statusCode: 400,
        message: "User Id Required",
      });
    }

    const isUserExist = await User.findById(userId);

    if (!isUserExist) {
      return responseHandler({
        res,
        statusCode: 401,
        message: "User doesn't exist",
      });
    }

    const profileImageResponse = await uploadOnCloudinary(profileImage?.path);

    console.log("Profile Uploaded : ", profileImageResponse);

    const coverImageResponse = await uploadOnCloudinary(coverImage?.path);

    console.log("Cover Image Uploaded : ", coverImageResponse);

    const updates = {
      ...(username !== undefined && { username }),
      ...(fullname !== undefined && { fullname }),
      ...(bio !== undefined && { bio }),
      ...(profileImage !== undefined && {
        profileImage: profileImageResponse.secure_url,
      }),
      ...(coverImage !== undefined && {
        coverImage: coverImageResponse.secure_url,
      }),
    };

    const user = await User.findByIdAndUpdate(userId, updates, {
      returnDocument: "after",
    });

    return responseHandler({
      res,
      statusCode: 200,
      message: "User's Profile Updated Successfully",
      data: user,
    });
  } catch (error) {
    return responseHandler({
      res,
      statusCode: 500,
      message: "Something went Wrong!",
      error: error.message,
    });
  }
};
