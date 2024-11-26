import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  environment: {
    type: String,
    enum: ["Development", "Production"],
    required: true,
  },
  techStack: {
    type: [String],
    required: true,
  },
  features: {
    type: String,
  },
  challenges: {
    type: String,
  },
  learnings: {
    type: String,
  },
  designPatterns: {
    type: String,
  },
  liveLink: {
    type: String,
  },
  repoLink: {
    type: String,
  },
  titleImage: {
    type: String,
    required: true,
  },
  layoutImages: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Projects ||
  mongoose.model("Projects", projectSchema);
