const Application =
    require("../models/Application");

const Job = require("../models/Job");
const Student =
    require("../models/Student");

const {
    calculateMatchScore
} = require("../services/matchingService");


const applyForJob = async (req, res) => {
    try {

        const {
            coverLetter
        } = req.body;

        const job =
            await Job.findById(req.params.jobId);

        if (!job) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        const student =
            await Student.findOne({
                user: req.user.id
            });

        if (!student) {
            return res.status(404).json({
                message: "Student profile not found"
            });
        }

        const existing =
            await Application.findOne({
                student: req.user.id,
                job: job._id
            });

        if (existing) {
            return res.status(400).json({
                message: "Already applied"
            });
        }

        const score =
            calculateMatchScore(
                student.skills,
                job.skills
            );

        const application =
            await Application.create({
                student: req.user.id,
                job: job._id,
                resume: student.resume,
                coverLetter,
                matchScore: score
            });

        res.status(201).json({
            message: "Application submitted",
            application
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const getMyApplications = async (
    req,
    res
) => {
    try {

        const applications =
            await Application.find({
                student: req.user.id
            })
                .populate(
                    "job",
                    "title location salary"
                )
                .sort({
                    createdAt: -1
                });

        res.json(applications);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const getJobApplicants = async (
    req,
    res
) => {
    try {

        const applications =
            await Application.find({
                job: req.params.jobId
            })
                .populate(
                    "student",
                    "name email"
                )
                .populate(
                    "job",
                    "title"
                )
                .sort({
                    matchScore: -1
                });

        res.json(applications);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const updateApplicationStatus =
    async (req, res) => {

        try {

            const {
                status
            } = req.body;

            const application =
                await Application.findById(
                    req.params.id
                );

            if (!application) {
                return res.status(404).json({
                    message:
                        "Application not found"
                });
            }

            application.status =
                status;

            await application.save();

            res.json({
                message:
                    "Application status updated",
                application
            });

        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };


module.exports = {
    applyForJob,
    getMyApplications,
    getJobApplicants,
    updateApplicationStatus
};