module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },    
    email_address: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    } ,
    picture: {
      type: DataTypes.TEXT,
      len: [1]
    }
  }
  ,
    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // An Article (foreignKey) is required or a Post can't be made
          User.belongsTo(models.Like)
            // , {
            // foreignKey: {
            //   allowNull: false
            // }
          }
        }
      }
  );
  return User;
};
