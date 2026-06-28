import mongoose from "mongoose";

const storySchema = new mongoose.Schema(
  {
    mediaType: {
      enum: ["image", "video"],
      required: true,
      type: String,
    },
    mediaUrl: {
      required: true,
      type: String,
    },
    user: {
      ref: "User",
      required: true,
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Story", storySchema);
