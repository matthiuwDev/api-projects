import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },   
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,          
        validate: {
            notEmpty: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
}, {
    timestamps: true
});