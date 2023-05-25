const asyncHandler = require('express-async-handler');

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public

const getCourses = asyncHandler (async (req, res) => {
    res.status(200).json({
        message: 'Get all courses'
    })
})

// @desc    Create a new course
// @route   POST /api/courses
// @access  Private

const createCourse = asyncHandler (async (req, res) => {
    if(!req.body.name) {
        res.status(400);
        throw new Error('Please enter a name');
    }

    res.status(200).json({
        message: 'Create a new course'
    })
})

// @desc    Update a course
// @route   PUT /api/courses/:id
// @access  Private

const updateCourse = asyncHandler (async (req, res) => {
    res.status(200).json({
        message: `Update a course ${req.params.id}`
    })
})

// @desc    Delete a course
// @route   DELETE /api/courses/:id
// @access  Private

const deleteCourse = asyncHandler (async (req, res) => {
    res.status(200).json({
        message: `Delete a course ${req.params.id}`
    })
})

module.exports = {
    getCourses,
    createCourse,
    updateCourse,
    deleteCourse
}
