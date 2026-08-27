import { User } from "../models/user.model.js";
import { errorHandler, responseHandler } from "../utils/responseHandler.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export const userRegister = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email?.trim() || !password?.trim()) {
      return responseHandler({
        res,
        statusCode: 400,
        message: "Please Provide Email or Password",
      });
    }

    const isUserExist = await User.findOne({
      email,
    });

    if (isUserExist) {
      return responseHandler({
        res,
        statusCode: 401,
        message: "User already Existed",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
    });

    const token = JWT.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);

    res.cookie("token", token, {
      httpOnly: true,
    });

    return responseHandler({
      res,
      statusCode: 201,
      message: "User Registered Successfully",
      data: user,
    });
  } catch (error) {
    return errorHandler({
      res,
      statusCode: 500,
      message: "Something went Wrong",
      error: error.message,
    });
  }
};

export const userLogin = async (req, res) => {};

export const userLogout = async (req, res) => {};
