import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
    basicInfo: {
        type: Object,
        required: true,
    },
    likertScales: {
        type: [Object], // Array of objects
    },
    questions: {
        timebound: {
            type: [Object], // Array of objects for timebound questions
        },
        timefree: {
            type: [Object], // Array of objects for timefree questions
        },
    },
    stressAssessment: {
        freeStress: {
            type: String,
        },
        stressLevel: {
            type: Number,
        },
        stressType: {
            type: String,
        },
    },
}, { timestamps: true });

export const records = mongoose.model("records", recordSchema);


