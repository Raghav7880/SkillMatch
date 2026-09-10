const express = require("express");

const {
    createCompany,
    getMyCompany,
    getMyJobs
} = require("../controllers/recruiterController");

const {
    protect
} = require("../middleware/authMiddleware");

const authorize =
    require("../middleware/roleMiddleware");

const router = express.Router();

router.post(
    "/company",
    protect,
    authorize("recruiter"),
    createCompany
);

router.get(
    "/company",
    protect,
    authorize("recruiter"),
    getMyCompany
);

router.get(
    "/jobs",
    protect,
    authorize("recruiter"),
    getMyJobs
);

module.exports = router;