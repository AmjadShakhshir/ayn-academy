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
        default: "6559e34f8d0656d1901eaae7",
        ref: "Role",
    },
});

export default mongoose.model("User", UserSchema);