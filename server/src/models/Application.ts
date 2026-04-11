import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    company: String,
    role: String,
    status: {
      type: String,
      enum: ["Applied", "Interview", "Offer", "Rejected"],
      default: "Applied",
    },
    jobDescription: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Application", applicationSchema);
