import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    organization: String,
    date: String,
    nop:String,
  },
  { timestamps: true } // adds createdAt and updatedAt automatically
);

export default mongoose.models.Submission ||
  mongoose.model("Submission", SubmissionSchema);
