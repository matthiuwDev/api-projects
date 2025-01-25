import Sequelize from "sequelize"

export const sequelize = new Sequelize('projectsdb', 'postgres', 'Matt2506)', {
    host: 'localhost',
    dialect: 'postgres',
});