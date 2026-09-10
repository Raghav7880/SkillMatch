const express = require("express");

const {
    getProfile,
    updateProfile
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

module.exports = router;