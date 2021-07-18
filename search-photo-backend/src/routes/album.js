/* eslint-disable linebreak-style */
import Router from 'express';
import Album from '../controllers/album';
import Photos from '../controllers/photos';

const router = Router();

router.get('/albums', Album.getAllAlbum);
router.get('/albums/:id', Album.showOneAlbum);
router.post('/albums/create',Album.createAlbum);

// Photoes routes

router.get('/albums/:albumId/photos', Photos.getAllPhotos)
router.post('/albums/:albumId/photos/create', Photos.createPhotos)

export default router;
