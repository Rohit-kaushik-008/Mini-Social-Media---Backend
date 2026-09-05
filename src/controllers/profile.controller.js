import { User } from "../models/user.model.js";
import { Post } from "../models/post.model.js";
import { Follow } from "../models/follow.model.js";
import { responseHandler, errorHandler } from "../utils/responseHandler.js";

export const getProfileStats = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.findById(userId);

    if (!user) {
      return responseHandler({
        res,
        statusCode: 404,
        message: "User not found",
      });
    }

    const followers = await Follow.countDocuments({
      following: userId,
    });

    const following = await Follow.countDocuments({
      follower: userId,
    });

    const posts = await Post.countDocuments({
      author: userId,
    });

    const profileData = {
      avatar: user?.profileImage || "",
      banner: user?.coverImage || "",
      username: user?.username || "",
      fullname: user?.fullname || "",
      bio: user?.bio || "",
    };

    const stats = {
      followersCount: followers,
      followingCount: following,
      postsCount: posts,
    };

    return responseHandler({
      res,
      statusCode: 200,
      message: "User's Profile Stats fetched successfully",
      data: { profileData, stats },
    });
  } catch (error) {
    return errorHandler({
      res,
      error: error.message,
    });
  }
};
