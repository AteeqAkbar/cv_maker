module.exports = (sequelize, DataTypes) => {
    const Skills = sequelize.define('skills', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        name: {
            type: DataTypes.STRING,

        },
       
        user_id: {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
           })
    return Skills
};