const express = require("express");

const {
    getUsers,
    getJobs,
    getCompanies
} = require("../controllers/adminController");

const {
    protect
} = require("../middleware/authMiddleware");

const authorize =
    require("../middleware/roleMiddleware");

const router = express.Router();

router.get(
    "/users",
    protect,
    authorize("admin"),
    getUsers
);

router.get(
    "/jobs",
    protect,
    authorize("admin"),
    getJobs
);

router.get(
    "/companies",
    protect,
    authorize("admin"),
    getCompanies
);

module.exports = router;