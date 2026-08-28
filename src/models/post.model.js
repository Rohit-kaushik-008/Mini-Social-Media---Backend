import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      default: "",
    },
    caption: {
      type: String,
      required: true,
      maxlength: [100, "Caption should be less than 100 characters"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  { timestamps: true },
);

export const Post = mongoose.model("Post", postSchema);
