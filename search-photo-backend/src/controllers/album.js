import models from "../database/models";
import { onError, onSuccess } from "../utils/response";

class Album {
  static async getAllAlbum(req, res) {
    try {
      const album = await models.Album.findAll({
        attributes: ["id", "name"],
      });
      return onSuccess(res, 200, "All Album successfully fetched!", album);
    } catch (error) {
      return onError(res, 500, "Internal Server Error");
    }
  }

  static async createAlbum(req, res) {
    try {
      const album = await models.Album.create({
        ...req.body,
      });
      return onSuccess(res, 201, "Album Created Successful", album);
    } catch (error) {
      return onError(res, 500, "Internal Server Error");
    }
  }

  static async showOneAlbum(req, res) {
    try {
      const album = await models.Album.findOne({
        where: { id: req.params.id },
      });

      if (!album) return onError(res, 404, "Album not found");
      return onSuccess(res, 200, "Album Fetched Successful", album);
    } catch (error) {
      return onError(res, 500, "Internal Server Error");
    }
  }
}
export default Album;
