import { User } from "../models/user.model.js";
import { errorHandler, responseHandler } from "../utils/responseHandler.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

// Register Controller
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
      secure: true,
      sameSite: "none",
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
      error: error.message,
    });
  }
};

// Login Controller
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email?.trim() || !password?.trim()) {
      return responseHandler({
        res,
        statusCode: 400,
        message: "Please Provide Email or Password",
      });
    }

    const user = await User.findOne({
      email,
    }).select("+password");

    if (!user) {
      return responseHandler({
        res,
        statusCode: 401,
        message: "Account doesn't exist",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return responseHandler({
        res,
        statusCode: 400,
        message: "Invalid Password",
      });
    }

    const token = JWT.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return responseHandler({
      res,
      statusCode: 200,
      message: "User Loggined Successfully",
      data: user,
    });
  } catch (error) {
    return responseHandler({
      res,
      error: error.message,
    });
  }
};

// Logout Controller
export const userLogout = async (req, res) => {
  try {
    res.clearCookie("token");
    return responseHandler({
      res,
      statusCode: 200,
      message: "User Logout Successfully",
    });
  } catch (error) {
    return errorHandler({
      res,
      error: error.message,
    });
  }
};
