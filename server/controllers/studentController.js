const Student = require("../models/Student");

const getProfile = async (req, res) => {
    try {
        const student = await Student.findOne({
            user: req.user.id
        }).populate("user", "name email");

        if (!student) {
            return res.status(404).json({
                message: "Student profile not found"
            });
        }

        res.json(student);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const updateProfile = async (req, res) => {
    try {
        const student = await Student.findOne({
            user: req.user.id
        });

        if (!student) {
            return res.status(404).json({
                message: "Student profile not found"
            });
        }

        Object.assign(student, req.body);

        await student.save();

        res.json({
            message: "Profile updated",
            student
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


module.exports = {
    getProfile,
    updateProfile
};