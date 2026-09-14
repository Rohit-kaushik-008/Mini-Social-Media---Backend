import { User } from "../models/user.model.js";
import { Post } from "../models/post.model.js";
import { Follow } from "../models/follow.model.js";
import { responseHandler, errorHandler } from "../utils/responseHandler.js";

export const getProfileStats = async (req, res) => {
  try {
    const userId = req.userId;
    const profileId = req.params.id;

    const user = await User.findById(profileId);

    if (!user) {
      return responseHandler({
        res,
        statusCode: 404,
        message: "User not found",
      });
    }

    const followers = await Follow.countDocuments({
      following: profileId,
    });

    const following = await Follow.countDocuments({
      follower: profileId,
    });

    const posts = await Post.countDocuments({
      author: profileId,
    });

    const profileData = {
      avatar:
        user?.profileImage ||
        "https://i.pinimg.com/736x/ce/ec/3d/ceec3ddfd13c0cd9374e499fbaa2119f.jpg",
      banner:
        user?.coverImage ||
        "https://i.pinimg.com/736x/1f/bc/4a/1fbc4a835a75f11145c690f7f38be2c2.jpg",
      username: user?.username || "",
      fullname: user?.fullname || "",
      bio: user?.bio || "",
    };

    const stats = {
      followersCount: followers,
      followingCount: following,
      postsCount: posts,
    };

    const isFollow = await Follow.findOne({
      follower: userId,
      following: profileId,
    });

    return responseHandler({
      res,
      statusCode: 200,
      message: "User's Profile Stats fetched successfully",
      data: { profileData, stats, isFollow },
    });
  } catch (error) {
    return errorHandler({
      res,
      error: error.message,
    });
  }
};
