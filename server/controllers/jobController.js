const Job = require("../models/Job");


// Get all jobs
const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find({
            status: "active"
        })
            .populate(
                "company",
                "companyName location logo"
            )
            .sort({
                createdAt: -1
            });

        res.json(jobs);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Get single job
const getJobById = async (req, res) => {
    try {
        const job = await Job.findById(
            req.params.id
        )
            .populate(
                "company",
                "companyName description website location"
            )
            .populate(
                "recruiter",
                "name email"
            );

        if (!job) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        res.json(job);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Create job
const createJob = async (req, res) => {
    try {
        const job = await Job.create({
            ...req.body,
            recruiter: req.user.id
        });

        res.status(201).json(job);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Delete job
const deleteJob = async (req, res) => {
    try {
        const job = await Job.findById(
            req.params.id
        );

        if (!job) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        if (
            job.recruiter.toString() !==
            req.user.id
        ) {
            return res.status(403).json({
                message: "Not authorized"
            });
        }

        await job.deleteOne();

        res.json({
            message: "Job deleted"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


module.exports = {
    getJobs,
    getJobById,
    createJob,
    deleteJob
};