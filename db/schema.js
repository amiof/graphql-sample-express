import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    lastname: { type: String },
    password: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
  },
  { timestamps: true }
);
const UserModel = mongoose.model("user", userSchema);
export { UserModel };
