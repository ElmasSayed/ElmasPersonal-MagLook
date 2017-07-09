module.exports = function(sequelize, DataTypes) {
  var Article = sequelize.define("Article", {
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false,
      validate: {
        len: [1]
      }
    },
    image_url: {
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1]
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }, 
    category: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]  
    }
  },
    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // An Article (foreignKey) is required or a Post can't be made
          Article.belongsTo(models.Like);
        }
      }
    }
  );
  return Article;
};

