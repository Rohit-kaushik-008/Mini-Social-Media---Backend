import { Follow } from "../models/follow.model.js";
import { Post } from "../models/post.model.js";
import { errorHandler, responseHandler } from "../utils/responseHandler.js";
import mongoose from "mongoose";

export const getFeed = async (req, res) => {
  try {
    const userId = req.userId;
    console.log("userId:", req.userId);
    console.log("type:", typeof req.userId);

    const following = await Follow.find({
      follower: userId,
    });

    const followingIds = following.map((follow) => follow.following);

    const feed = await Post.aggregate([
      // match users
      {
        $match: {
          author: { $in: followingIds },
        },
      },
      // user info
      {
        $lookup: {
          from: "users",
          localField: "author",
          foreignField: "_id",
          pipeline: [
            {
              $project: {
                _id: 0,
                username: 1,
                fullname: 1,
                profileImage: 1,
              },
            },
          ],
          as: "authorInfo",
        },
      },
      // like count
      {
        $lookup: {
          from: "likes",
          localField: "_id",
          foreignField: "post",
          as: "likes",
        },
      },
      // comment count
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "post",
          as: "comments",
        },
      },
      // find that like object present or not
      {
        $lookup: {
          from: "likes",
          let: { postId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$post", "$$postId"] },
                    { $eq: ["$author", new mongoose.Types.ObjectId(userId)] },
                  ],
                },
              },
            },
          ],
          as: "userLike",
        },
      },
      // adding important fields
      {
        $addFields: {
          likesCount: {
            $size: "$likes",
          },
          commentsCount: {
            $size: "$comments",
          },
          isLiked: {
            $gt: [{ $size: "$userLike" }, 0],
          },
        },
      },
      {
        $unwind: "$authorInfo",
      },
    ]);

    return responseHandler({
      res,
      statusCode: 200,
      message: "Feed Fetched successfully",
      data: feed,
    });
  } catch (error) {
    return errorHandler({
      res,
      error: error.message,
    });
  }
};
