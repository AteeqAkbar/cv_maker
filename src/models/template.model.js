module.exports = (sequelize, DataTypes) => {
    const template = sequelize.define('template', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        name: {
            type: DataTypes.STRING,

        }
    })
    return template
};