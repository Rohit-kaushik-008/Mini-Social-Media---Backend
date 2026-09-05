import { Follow } from "../models/follow.model.js";
import { Post } from "../models/post.model.js";
import { User } from "../models/user.model.js";
import { errorHandler, responseHandler } from "../utils/responseHandler.js";

export const followUser = async (req, res) => {
  try {
    const followingId = req.params.id;
    const followerId = req.userId;

    // check that user will not follow itself.
    if (followingId === followerId) {
      return responseHandler({
        res,
        statusCode: 400,
        message: "You can't follow yourself",
      });
    }

    const userToFollow = await User.findById(followingId);

    if (!userToFollow) {
      return responseHandler({
        res,
        statusCode: 404,
        message: "User doesn't exist",
      });
    }

    // check that user can't follow same user twice.
    const isFollowed = await Follow.findOne({
      following: followingId,
      follower: followerId,
    });

    if (isFollowed) {
      return responseHandler({
        res,
        statusCode: 409,
        message: "You already follow this user",
      });
    }

    const follow = await Follow.create({
      following: followingId,
      follower: followerId,
    });

    return responseHandler({
      res,
      statusCode: 201,
      message: "Follow Successfully",
      data: follow,
    });
  } catch (error) {
    return errorHandler({
      res,
      error: error.message,
    });
  }
};

export const unfollowUser = async (req, res) => {
  try {
    const followingId = req.params.id;
    const followerId = req.userId;

    // check that user can't allow to unfollow himself for safety purpose
    if (followingId === followerId) {
      return responseHandler({
        res,
        statusCode: 400,
        message: "You can't unfollow himself",
      });
    }

    const userToFollow = await User.findById(followingId);

    if (!userToFollow) {
      return responseHandler({
        res,
        statusCode: 404,
        message: "User doesn't exist",
      });
    }

    const follow = await Follow.findOneAndDelete({
      following: followingId,
      follower: followerId,
    });

    if (!follow) {
      return responseHandler({
        res,
        statusCode: 404,
        message: "You are not following this user",
      });
    }

    return responseHandler({
      res,
      statusCode: 200,
      message: "Unfollow user successfully",
      data: follow,
    });
  } catch (error) {
    return errorHandler({
      res,
      error: error.message,
    });
  }
};

