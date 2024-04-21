import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema(
    {
        number: {
            type: Number,
        },
        name: {
            type: String,
        },
        type: {
            type: String,
        },
        address: {
            type: String,
        },
        coordinates: {
            type: [Number],
        },
        district: {
            type: String,
        },
        chief: {
            type: String,
        },
        phone: {
            type: String,
        },
        fax: {
            type: String,
        },
        mode: {
            type: String,
        }
    }
)

export default mongoose.model("Hospital", HospitalSchema);