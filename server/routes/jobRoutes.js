const express = require("express");

const {
    getJobs,
    getJobById,
    createJob,
    deleteJob
} = require("../controllers/jobController");

const {
    protect
} = require("../middleware/authMiddleware");

const authorize =
    require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/", getJobs);

router.get("/:id", getJobById);

router.post(
    "/",
    protect,
    authorize("recruiter"),
    createJob
);

router.delete(
    "/:id",
    protect,
    authorize("recruiter"),
    deleteJob
);

module.exports = router;