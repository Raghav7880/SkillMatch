const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes =
    require("./routes/authRoutes");

const studentRoutes =
    require("./routes/studentRoutes");

const recruiterRoutes =
    require("./routes/recruiterRoutes");

const jobRoutes =
    require("./routes/jobRoutes");

const applicationRoutes =
    require("./routes/applicationRoutes");

const adminRoutes =
    require("./routes/adminRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "SkillMatch API is running"
    });
});

app.use(
    "/api/auth",
    authRoutes
);

app.use(
    "/api/students",
    studentRoutes
);

app.use(
    "/api/recruiters",
    recruiterRoutes
);

app.use(
    "/api/jobs",
    jobRoutes
);

app.use(
    "/api/applications",
    applicationRoutes
);

app.use(
    "/api/admin",
    adminRoutes
);

const PORT =
    process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});