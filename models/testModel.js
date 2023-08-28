import mongoose, { model } from "mongoose";

const testSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Test || model("Test", testSchema);
