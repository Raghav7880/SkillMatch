const express = require("express");

const {
    applyForJob,
    getMyApplications,
    getJobApplicants,
    updateApplicationStatus
} = require("../controllers/applicationController");

const {
    protect
} = require("../middleware/authMiddleware");

const authorize =
    require("../middleware/roleMiddleware");

const router = express.Router();

router.post(
    "/apply/:jobId",
    protect,
    authorize("student"),
    applyForJob
);

router.get(
    "/my",
    protect,
    authorize("student"),
    getMyApplications
);

router.get(
    "/job/:jobId",
    protect,
    authorize("recruiter"),
    getJobApplicants
);

router.put(
    "/:id/status",
    protect,
    authorize("recruiter"),
    updateApplicationStatus
);

module.exports = router;