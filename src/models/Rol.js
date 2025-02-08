import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { User } from "./User.js";

export const Rol = sequelize.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Rol.hasMany(User, {
    foreignKey: 'rolId',
    sourceKey: 'id'
});

User.belongsTo(Rol, {
    foreignKey: 'rolId',
    targetKey: 'id'
});