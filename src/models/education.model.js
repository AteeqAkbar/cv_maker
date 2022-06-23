module.exports = (sequelize, DataTypes) => {
    const Education = sequelize.define('education', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        degree: {
            type: DataTypes.STRING,

        },
        insititute: {
            type: DataTypes.STRING,

        },
        join_date: {
            type: DataTypes.STRING,

        },
        end_date: {
            type: DataTypes.STRING,

        },
       
        user_id: {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
           })
    return Education
};