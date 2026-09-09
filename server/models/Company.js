const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
    {
        recruiter: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        companyName: {
            type: String,
            required: true
        },

        description: {
            type: String
        },

        website: {
            type: String
        },

        location: {
            type: String
        },

        industry: {
            type: String
        },

        logo: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Company", companySchema);