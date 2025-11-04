import mongoose from "mongoose";

const IndustriesSchema = new mongoose.Schema(
  {
    name: String,
    industry: String,
    description: String,
    location: String,
    logo: String,
  },
  { timestamps: true }
);

export default mongoose.models.Industries ||
  mongoose.model("Industries", IndustriesSchema);
