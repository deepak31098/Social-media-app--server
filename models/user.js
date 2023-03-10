import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },
    secret: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    about: {},
    image: {
      url: String,
      public_id: String,
    },
    role: {
      type: String,
      default: "Subscriber",
    },
    following: [{ type: Schema.ObjectId, ref: "User" }],
    followers: [{ type: Schema.ObjectId, ref: "User" }],
  },

  { timestamps: true }
);

export default mongoose.model("User", userSchema);

//  if we want to set the width height and scale the image the image then we can use w_70,h_50,c_scale in the url
//  after upload this would set the required size to be should in the client side
