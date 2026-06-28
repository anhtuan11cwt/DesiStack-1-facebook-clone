import multer from "multer";

const fileFilter = (_req, file, cb) => {
  if (file.mimetype.startsWith("image") || file.mimetype.startsWith("video")) {
    cb(null, true);
  } else {
    cb(new Error("Chỉ cho phép tệp hình ảnh và video"), false);
  }
};

const multerMiddleware = multer({
  fileFilter,
  limits: {
    fileSize: 100 * 1024 * 1024,
  },
  storage: multer.memoryStorage(),
});

export default multerMiddleware;
