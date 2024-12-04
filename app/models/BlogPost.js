import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    excerpt: {
      type: String,
      required: true,
    },
    sections: [
      {
        type: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
      },
    ],
    categories: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.BlogPost ||
  mongoose.model("BlogPost", BlogPostSchema);
