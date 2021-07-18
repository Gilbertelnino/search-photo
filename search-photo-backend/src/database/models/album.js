const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Album.hasMany(models.Photo, {
        foreignKey: "album_id",
        as: "albums",
        onDelete: "cascade"
      });
    }
  }
  Album.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Album',
    tableName: 'Albums'
  });
  return Album;
};
