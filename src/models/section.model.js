module.exports = (sequelize, DataTypes) => {
    const section = sequelize.define('section', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        education: {
            type: DataTypes.STRING,

        },
        experience: {
            type: DataTypes.STRING,

        },
        skills: {
            type: DataTypes.STRING,

        },
        template_id: {
            type: DataTypes.INTEGER,

        },

    })
    return section
};