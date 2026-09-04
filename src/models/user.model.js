import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      trim: true,
      default: "",
      maxlength: [15, "name should contain less than 15 characters"],
    },
    username: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      sparse: true,
      maxLength: [15, "username should contain less than 15 characters"],
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      trim: true,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Password is required for creating an account."],
      minLength: [6, "Password should contain more than 6 characters"],
      select: false,
    },
    profileImage: {
      type: String,
      default: "",
    },
    coverImage: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      maxlength: [160, "Bio should contain less than 160 charaters"],
      default: "",
    },
  },

  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);
