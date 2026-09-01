import { Follow } from "../models/follow.model.js";
import { Post } from "../models/post.model.js";
import { errorHandler, responseHandler } from "../utils/responseHandler.js";

export const getFeed = async (req, res) => {
  try {
    const userId = req.userId;

    const following = await Follow.find({
      follower: userId,
    });

    const followingIds = following.map((follow) => follow.following);

    const limit = req.query.limit;
    const page = req.query.page;
    const skip = (page - 1) * limit;

    const feed = await Post.find({
      author: { $in: followingIds },
    })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

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
