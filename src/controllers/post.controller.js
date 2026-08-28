import { Post } from "../models/post.model.js";
import uploadOnCloudinary from "../services/Cloudinary.js";
import { responseHandler, errorHandler } from "../utils/responseHandler.js";

// Create Post Controller
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

// Get all Post Controller
export const getAllPosts = async (req, res) => {
  try {
    const userId = req.userId;

    const posts = await Post.find({
      author: userId,
    });
    return responseHandler({
      res,
      statusCode: 200,
      message: "All Posts Fetched Successfully",
      data: posts,
    });
  } catch (error) {
    return errorHandler({
      res,
      statusCode: 500,
      message: "Something went wrong!",
      error: error.message,
    });
  }
};

// Delete Post Controller
export const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.userId;

    const post = await Post.findOneAndDelete({
      _id: postId,
      author: userId,
    });

    if (!post) {
      return responseHandler({
        res,
        statusCode: 404,
        message: "Post not found or you are not authorized to delete it",
      });
    }

    return responseHandler({
      res,
      statusCode: 200,
      message: "Post Deleted Successfully",
      data: post,
    });
  } catch (error) {
    return errorHandler({
      res,
      statusCode: 500,
      message: "Something went wrong!",
      error: error.message,
    });
  }
};

// Update Post Controller
export const updatePost = async (req, res) => {
  try {
    const userId = req.userId;
    const postId = req.params.id;
    const { caption } = req.body;

    const post = await Post.findOneAndUpdate(
      { _id: postId, author: userId },
      { caption },
      {
        returnDocument: "after",
      },
    );

    if (!post) {
      return responseHandler({
        res,
        statusCode: 404,
        message: "Post not found or you are not authorized to update it",
      });
    }

    return responseHandler({
      res,
      statusCode: 200,
      message: "Post Updated Successfully",
      data: post,
    });
  } catch (error) {
    return errorHandler({
      res,
      statusCode: 500,
      message: "Something went wrong",
      errro: error.message,
    });
  }
};
