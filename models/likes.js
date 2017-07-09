module.exports = function(sequelize, DataTypes) {
  var Like = sequelize.define("Like", {},
    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // An Article (foreignKey) is required or a Like can't be made
          Like.hasMany(models.Article, {
            foreignKey: {
              allowNull: true
            }
          }),
          // An User (foreignKey) is required or a Like can't be made          
          Like.hasMany(models.User, {
            foreignKey: {
              allowNull: true
            }
          });
        }
      }
    }
  );
  return Like;
};
