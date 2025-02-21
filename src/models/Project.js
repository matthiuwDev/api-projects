import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

import { Task } from './Task.js'

export const Project = sequelize.define('projects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true  
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true, 
        },
    },
    priority: {
        type: DataTypes.INTEGER,
        validate: {
            min: 1,
            max: 5,
        },
    },
    description: {
        type: DataTypes.STRING
    },
}, {
    timestamps: true
});

Project.hasMany(Task, {
    foreignKey: 'projectId',
    sourceKey: 'id'
});

Task.belongsTo(Project, {
    foreignKey: 'projectId',
    targetKey: 'id'
});