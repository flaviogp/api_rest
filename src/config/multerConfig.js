import multer from 'multer';
import { extname, resolve } from 'path';

function random() {
  return Math.floor(Math.random() * 1000 + 10000);
}

const newFileName = (file) => `${Date.now()}_${random()}${extname(file.originalname)}`;

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Insira um arquivo PNG ou JPG'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, newFileName(file));
    },
  }),
};
