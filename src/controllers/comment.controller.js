import { Comment } from "../models/comment.model.js";
import { Post } from "../models/post.model.js";
import { errorHandler, responseHandler } from "../utils/responseHandler.js";
import mongoose from "mongoose";

export const commentPost = async (req, res) => {
  try {
    const { content } = req.body;
    const userId = req.userId;
    const postId = req.params.id;

    if (content?.trim() === "") {
      return responseHandler({
        res,
        statusCode: 400,
        message: "Content shouldn't be empty",
      });
    }

    // check : post exist or not
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

    const comment = await Comment.create({
      content: content,
      author: userId,
      post: postId,
    });

    return responseHandler({
      res,
      statusCode: 201,
      message: "Comment created Successfully",
      data: comment,
    });
  } catch (error) {
    return errorHandler({
      res,
      error: error.message,
    });
  }
};

export const uncommentPost = async (req, res) => {
  try {
    const userId = req.userId;
    const commentId = req.params.id;

    const comment = await Comment.findOneAndDelete({
      _id: commentId,
      author: userId,
    });

    if (!comment) {
      return responseHandler({
        res,
        statusCode: 404,
        message: "Comment not found or You are not authorized to delete it",
      });
    }

    return responseHandler({
      res,
      statusCode: 200,
      message: "Comment Deleted Successfully",
      data: comment,
    });
  } catch (error) {
    return errorHandler({
      res,
      error: error.message,
    });
  }
};

export const getCommentCount = async (req, res) => {
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

    const commentCount = await Comment.countDocuments({
      post: postId,
    });

    if (commentCount <= 0) {
      return responseHandler({
        res,
        statusCode: 200,
        message: "Post haven't any Comment",
      });
    }

    return responseHandler({
      res,
      statusCode: 200,
      message: "Comment Count Fetched Successfully",
      data: commentCount,
    });
  } catch (error) {
    return errorHandler({
      res,
      error: error.message,
    });
  }
};

export const getPostComments = async (req, res) => {
  try {
    const postId = new mongoose.Types.ObjectId(req.params.id);

    const detail = await Comment.aggregate([
      {
        $match: { post: postId },
      },
      {
        $lookup: {
          from: "users",
          foreignField: "_id",
          localField: "author",
          as: "users",
        },
      },
      {
        $unwind: "$users",
      },
      {
        $addFields: {
          profileImage: "$user.profileImage",
          username: "$user.username",
        },
      },
      {
        $project: {
          content: 1,
          author: 1,
          "users.profileImage": 1,
          "users.username": 1,
        },
      },
    ]);

    return responseHandler({
      res,
      statusCode: 200,
      message: "Comment fetched Successfully",
      data: detail,
    });
  } catch (error) {
    return errorHandler({
      res,
      error: error.message,
    });
  }
};
