module.exports = (sequelize, DataTypes) => {
    const Experience = sequelize.define('experience', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        company_name: {
            type: DataTypes.STRING,

        },
        position: {
            type: DataTypes.STRING,

        },
        join_date: {
            type: DataTypes.STRING,

        },
        end_date: {
            type: DataTypes.STRING,

        },
        working: {
            type: DataTypes.STRING,

        },
        company_address: {
            type: DataTypes.STRING,

        },
       
        user_id: {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
           })
    return Experience
};