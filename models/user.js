import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required!" ],
    unique: [true , "Email is already registered!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    unique: [true, "Username is already taken!"],
    // match: [/^[a-zA-Z0-9]+$/, "Username is invalid!"],
  },
  image: {
    type: String
  },
});

const User = models.User || model("User", userSchema);

export default User;