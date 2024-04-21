import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter Your Name"],
        },
        password: {
            type: String,
            required: [true, "Please Enter Your Password"],
            select: false,
        },
        email: {
            type: String,
            required: [true, "Please Enter Your Email"],
        },
        dateOfBirth: {
            type: Date,
            required: false,
        },
        avatar: {
            public_id: {
                type: String,
                required: true,
                default: "default photo",
            },
            url: {
                type: String,
                required: true,
                default: "defaultPic.png",
            },
        },
        medbook: {
            fluor: {
                type: Date,
                required: false,
            },
            influenza: {
                type: Date,
                required: false,
            },
            blood: {
                type: Date,
                required: false,
            },
            urine: {
                type: Date,
                required: false,
            },
            ecg: {
                type: Date,
                required: false,
            },
        }
    }
)

// Password Hash
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
});

// JWT TOKEN
UserSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// Compare Password
UserSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

export default mongoose.model("User", UserSchema);