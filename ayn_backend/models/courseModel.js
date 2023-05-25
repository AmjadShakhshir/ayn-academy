const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
    },
    description: String,
    price: {
        type: Number,
        required: [true, 'Please enter a price'],
    },
    category: {
        type: String,
        required: [true, 'Please enter a category'],
        enum: ['Web Development',
        'Mobile Development',
        'Data Science',
        'Machine Learning',
        'Artificial Intelligence',
        'Business',
        'Finance',
        'Marketing',
        'Design',
        'Productivity',
        'Personal Development',
        'Music',
        'Academics',
        'IT & Software',
        'Personal Development',
        'Health & Fitness',
        'Office Productivity',
        'Others']
    },
    image: {
        type: String,
        required: [true, 'Please enter an image'],
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
    rating: {
        type: Number,
        default: 0
    },
    numReviews: {
        type: Number,
        default: 0
    }}, {
    timestamps: true
})

module.exports = mongoose.model('Course', courseSchema);