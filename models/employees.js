const mongoose = require("mongoose");
const moment = require("moment");

const Schema = mongoose.Schema;
const EmployeeSchema = new Schema(
    {
        createdDate: {
            type: String,
            default: Date.now
        },
        updatedDate: {
            type: String,
            default: Date.now
        },
        firstname: {
            type: String,
            trim: true,
            required: "First Name Is Required"
        },
        lastname: {
            type: String,
            trim: true,
            required: "Last Name Is Required"
        },
        department: {
            type: String,
            trim: true,
            default: "None"
        },
        manager: {
            type: Boolean,
            default: false
        },
        pay: {
            type: Number,
            trim: true,
            default: 0,
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

const EmployeeInformation = mongoose.model("EmployeeInformation", EmployeeSchema);
module.exports = EmployeeInformation;