const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('cvmaker', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true
    }
  });
  const db = {}
db.User = require("./user.model")(sequelize, DataTypes)
db.Education = require("./education.model")(sequelize, DataTypes)
db.Experience = require("./experience.model")(sequelize, DataTypes)
db.Skills = require("./skills.model")(sequelize, DataTypes)
db.Template = require("./template.model")(sequelize, DataTypes)
db.Section = require("./section.model")(sequelize,DataTypes)

db.User.hasMany(db.Education, { foreignKey: 'user_id' })
db.Education.belongsTo(db.User, { foreignKey: 'user_id' })

db.User.hasMany(db.Experience, { foreignKey: 'user_id' })
db.Experience.belongsTo(db.User, { foreignKey: 'user_id' })

db.User.hasMany(db.Skills, { foreignKey: 'user_id' })
db.Skills.belongsTo(db.User, { foreignKey: 'user_id' })

db.Template.hasMany(db.Section,{foreignKey:'template_id'})
db.Section.belongsTo(db.Template,{foreignKey:'template_id'})



  module.exports=db