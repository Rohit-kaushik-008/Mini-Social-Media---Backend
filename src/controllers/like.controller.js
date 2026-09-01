import { Like } from "../models/like.model.js";
import { errorHandler, responseHandler } from "../utils/responseHandler.js";
import { Post } from "../models/post.model.js";

export const likePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.userId;

    // check : is post exist
    const isPostExist = await Post.findOne({
      _id: postId,
    });

    if (!isPostExist) {
      return responseHandler({
        res,
        statusCode: 404,
        message: "Post not found",
      });
    }

    // check : if post already liked
    const isPostLiked = await Like.findOne({
      author: userId,
      post: postId,
    });

    if (isPostLiked) {
      return responseHandler({
        res,
        statusCode: 409,
        message: "Post already Liked",
      });
    }

    const like = await Like.create({
      post: postId,
      author: userId,
    });

    return responseHandler({
      res,
      statusCode: 201,
      message: "Post Liked successfully",
      data: like,
    });
  } catch (error) {
    return errorHandler({
      res,
      error: error.message,
    });
  }
};

export const unlikePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.userId;

    // check : is post exist
    const isPostExist = await Post.findOne({
      _id: postId,
    });

    if (!isPostExist) {
      return responseHandler({
        res,
        statusCode: 404,
        message: "Post not found",
      });
    }

    const isliked = await Like.findOne({
      post: postId,
      author: userId,
    });

    if (!isliked) {
      return responseHandler({
        res,
        statusCode: 404,
        message: "You haven't liked this post",
      });
    }

    const unlike = await Like.findOneAndDelete({
      post: postId,
      author: userId,
    });

    return responseHandler({
      res,
      statusCode: 200,
      message: "Post Unliked Successfully",
      data: unlike,
    });
  } catch (error) {
    return errorHandler({
      res,
      error: error.message,
    });
  }
};

export const getLikeCount = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findOne({
      _id: postId,
    });

    if (!post) {
      return responseHandler({
        res,
        statusCode: 404,
        message: "Post not found",
      });
    }

    const likeCount = await Like.countDocuments({
      post: postId,
    });

    if (likeCount <= 0) {
      return responseHandler({
        res,
        statusCode: 200,
        message: "Post haven't any like",
      });
    }

    return responseHandler({
      res,
      statusCode: 200,
      message: "Like Count Fetched Successfully",
      data: likeCount,
    });
  } catch (error) {
    return errorHandler({
      res,
      error: error.message,
    });
  }
};
