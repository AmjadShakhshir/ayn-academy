import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    roleId: {
        type: Schema.Types.ObjectId,
        ref: "Role",
    },
});

export default mongoose.model("User", UserSchema);