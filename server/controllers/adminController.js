const User = require("../models/User");
const Job = require("../models/Job");
const Company = require("../models/Company");

const getUsers = async (req, res) => {
    try {

        const users =
            await User.find()
                .select("-password");

        res.json(users);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


const getJobs = async (req, res) => {
    try {

        const jobs =
            await Job.find()
                .populate(
                    "company",
                    "companyName"
                );

        res.json(jobs);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


const getCompanies = async (req, res) => {
    try {

        const companies =
            await Company.find()
                .populate(
                    "recruiter",
                    "name email"
                );

        res.json(companies);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


module.exports = {
    getUsers,
    getJobs,
    getCompanies
};