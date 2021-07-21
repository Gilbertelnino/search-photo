import models from "../database/models";
import { onError, onSuccess } from "../utils/response";

class Photos {
  static async getAllPhotos(req, res) {
    try {
      const { albumId } = req.params;
      const photos = await models.Photo.findAll({
        where: { album_id: albumId },
        attributes: ["id", "title", "thumbnailUrl", "album_id"],
      });
      return onSuccess(res, 200, "All Photos Fetched Successful", photos);
    } catch (error) {
      console.log(error);
      return onError(res, 500, "Internal Server Error");
    }
  }

  static async createPhotos(req, res) {
    try {
      const { albumId } = req.params;
      const photo = await models.Photo.create({
        ...req.body,
        album_id: albumId,
      });
      await photo.save();

      return onSuccess(res, 201, "Photos Created Successful", photo);
    } catch (error) {
      return onError(res, 500, "Internal Server Error");
    }
  }
}

export default Photos;
