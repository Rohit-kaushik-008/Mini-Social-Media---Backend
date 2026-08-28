import { Post } from "../models/post.model.js";
import uploadOnCloudinary from "../services/Cloudinary.js";
import { responseHandler, errorHandler } from "../utils/responseHandler.js";

export const createPost = async (req, res) => {
  try {
    const { caption } = req.body;
    const postImage = req.file;
    const user_Id = req.userId;

    if (!caption?.trim()) {
      return responseHandler({
        res,
        statusCode: 400,
        message: "Caption is required",
      });
    }

    const postImageResponse = await uploadOnCloudinary(postImage?.path);

    if (postImage && !postImageResponse) {
      return responseHandler({
        res,
        statusCode: 500,
        message: "Image upload failed",
      });
    }

    const post = await Post.create({
      caption,
      image: postImageResponse?.secure_url,
      author: user_Id,
    });

    return responseHandler({
      res,
      statusCode: 201,
      message: "Post Created successfully",
      data: post,
    });
  } catch (error) {
    return errorHandler({
      res,
      statusCode: 500,
      message: "something went wrong!",
      error: error.message,
    });
  }
};
