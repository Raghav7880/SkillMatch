const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true
        },

        phone: {
            type: String
        },

        college: {
            type: String
        },

        degree: {
            type: String
        },

        branch: {
            type: String
        },

        graduationYear: {
            type: Number
        },

        cgpa: {
            type: Number
        },

        skills: [
            {
                type: String,
                trim: true
            }
        ],

        resume: {
            type: String
        },

        profileSummary: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Student", studentSchema);