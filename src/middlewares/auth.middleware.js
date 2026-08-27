import JWT from "jsonwebtoken";
import { errorHandler, responseHandler } from "../utils/responseHandler.js";
import { response } from "express";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return responseHandler({
        res,
        statusCode: 401,
        message: "Authentication Required",
      });
    }

    const decodedToken = JWT.verify(token, process.env.JWT_SECRET_KEY);

    req.userId = decodedToken.userId;

    next();
  } catch (error) {
    return errorHandler({
      res,
      statusCode: 500,
      message: "Something went Wrong!",
      error: error.message,
    });
  }
};
