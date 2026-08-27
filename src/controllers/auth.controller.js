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

// Login Controller
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // console.log("Email : ", email, "Password : ", password);

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

    // console.log("User : ", user);

    if (!user) {
      return responseHandler({
        res,
        statusCode: 401,
        message: "Account doesn't exist",
      });
    }

    // console.log("Not user");

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    // console.log("Is Password Correct ? : ", isPasswordCorrect);

    if (!isPasswordCorrect) {
      return responseHandler({
        res,
        statusCode: 400,
        message: "Invalid Password",
      });
    }

    const token = JWT.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);

    // console.log("Token : ", token);

    res.cookie("token", token, {
      httpOnly: true,
    });

    // console.log("User Created Successfully");

    return responseHandler({
      res,
      statusCode: 200,
      message: "User Loggined Successfully",
      user,
    });
  } catch (error) {
    return responseHandler({
      res,
      statusCode: 500,
      message: "something went wrong",
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
      statusCode: 500,
      message: "Something went wrong!",
      error: error.message,
    });
  }
};
