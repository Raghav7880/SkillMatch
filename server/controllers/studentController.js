const Student = require("../models/Student");
const Job = require("../models/Job");

const {
    calculateMatchScore,
    getMatchedSkills
} = require("../services/matchingService");


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


const getRecommendedJobs = async (req, res) => {
    try {

        const student = await Student.findOne({
            user: req.user.id
        });

        if (!student) {
            return res.status(404).json({
                message: "Student profile not found"
            });
        }

        const jobs = await Job.find({
            status: "active"
        }).populate(
            "company",
            "companyName logo location"
        );

        const recommendations = jobs.map(job => {

            const score = calculateMatchScore(
                student.skills,
                job.skills
            );

            const matchedSkills = getMatchedSkills(
                student.skills,
                job.skills
            );

            return {
                ...job.toObject(),
                matchScore: score,
                matchedSkills
            };
        });

        recommendations.sort(
            (a, b) =>
                b.matchScore - a.matchScore
        );

        res.json(recommendations);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


module.exports = {
    getProfile,
    updateProfile,
    getRecommendedJobs
};