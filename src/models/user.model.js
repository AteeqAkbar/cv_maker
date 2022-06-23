module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        name: {
            type: DataTypes.STRING,

        },
        email: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
        pass: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        subheading: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        about: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        pic: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        phone: {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        location: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
      
    })
    return User
};