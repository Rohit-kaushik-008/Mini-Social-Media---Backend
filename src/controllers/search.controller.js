import { User } from "../models/user.model.js";
import { errorHandler, responseHandler } from "../utils/responseHandler.js";

export const searchUser = async (req, res) => {
  try {
    const searchedName = req.query.username;

    const user = await User.aggregate([
      {
        $match: {
          username: {
            $regex: `^${searchedName}`,
            $options: "i",
          },
        },
      },
      {
        $addFields: {
          priority: {
            $cond: {
              if: { $eq: ["$username", searchedName] },
              then: 1,
              else: 0,
            },
          },
        },
      },
      {
        $sort: {
          priority: -1,
        },
      },
      {
        $limit: 5,
      },
    ]);

    if (user.length === 0) {
      return responseHandler({
        res,
        statusCode: 404,
        message: "Username doesn't exist",
      });
    }

    return responseHandler({
      res,
      statusCode: 200,
      message: "User find successfully",
      data: user,
    });
  } catch (error) {
    return errorHandler({
      res,
      error: error.message,
    });
  }
};
