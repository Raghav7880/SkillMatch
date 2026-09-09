const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
    {
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        job: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Job",
            required: true
        },

        resume: {
            type: String
        },

        coverLetter: {
            type: String
        },

        matchScore: {
            type: Number,
            default: 0
        },

        status: {
            type: String,
            enum: [
                "Applied",
                "Under Review",
                "Shortlisted",
                "Rejected",
                "Selected"
            ],
            default: "Applied"
        }
    },
    {
        timestamps: true
    }
);

applicationSchema.index(
    {
        student: 1,
        job: 1
    },
    {
        unique: true
    }
);

module.exports = mongoose.model(
    "Application",
    applicationSchema
);