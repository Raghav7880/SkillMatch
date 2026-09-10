const Company = require("../models/Company");
const Job = require("../models/Job");

const createCompany = async (req, res) => {
    try {
        const company = await Company.create({
            recruiter: req.user.id,
            ...req.body
        });

        res.status(201).json(company);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const getMyCompany = async (req, res) => {
    try {
        const company =
            await Company.findOne({
                recruiter: req.user.id
            });

        res.json(company);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const getMyJobs = async (req, res) => {
    try {
        const jobs = await Job.find({
            recruiter: req.user.id
        })
            .populate(
                "company",
                "companyName"
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


module.exports = {
    createCompany,
    getMyCompany,
    getMyJobs
};