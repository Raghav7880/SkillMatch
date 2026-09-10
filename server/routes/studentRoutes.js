const express = require("express");

const {
    getProfile,
    updateProfile,
    getRecommendedJobs
} = require("../controllers/studentController");

const {
    protect
} = require("../middleware/authMiddleware");

const authorize =
    require("../middleware/roleMiddleware");

const router = express.Router();


router.get(
    "/profile",
    protect,
    authorize("student"),
    getProfile
);


router.put(
    "/profile",
    protect,
    authorize("student"),
    updateProfile
);


router.get(
    "/recommended-jobs",
    protect,
    authorize("student"),
    getRecommendedJobs
);


module.exports = router;