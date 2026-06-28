import jwt from "jsonwebtoken";

import responseHandler from "../utils/responseHandler.js";

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.authToken;

    if (!token) {
      return responseHandler(res, 401, "Vui lòng đăng nhập để tiếp tục");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      email: decoded.email,
      userId: decoded.userId,
    };

    next();
  } catch {
    return responseHandler(res, 401, "Token không hợp lệ hoặc đã hết hạn");
  }
};

export default authMiddleware;
