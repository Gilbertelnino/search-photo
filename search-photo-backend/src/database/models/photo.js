 
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Photo.belongsTo(models.Album, {
        foreignKey: "album_id",
      });
    }
  }
  Photo.init({
    title: DataTypes.STRING,
    thumbnailUrl: DataTypes.STRING,
    album_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Photo',
    tableName: 'Photos'
  });
  return Photo;
};