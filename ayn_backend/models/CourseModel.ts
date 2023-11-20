import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    courseDate: {
        type: Date,
    },
});

export default mongoose.model("Course", CourseSchema);