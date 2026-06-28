import bcrypt from "bcryptjs";

import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import responseHandler from "../utils/responseHandler.js";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password, gender, dateOfBirth } = req.body;

    if (!username || username.trim().length < 3) {
      return responseHandler(
        res,
        400,
        "Tên người dùng phải có ít nhất 3 ký tự",
      );
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return responseHandler(res, 400, "Email không hợp lệ");
    }
    if (!password || password.length < 8) {
      return responseHandler(res, 400, "Mật khẩu phải có ít nhất 8 ký tự");
    }
    if (!gender || !["male", "female"].includes(gender)) {
      return responseHandler(res, 400, "Giới tính không hợp lệ");
    }
    if (!dateOfBirth) {
      return responseHandler(res, 400, "Ngày sinh không được để trống");
    }
    const age = Math.floor(
      (Date.now() - new Date(dateOfBirth).getTime()) / 31557600000,
    );
    if (age < 18) {
      return responseHandler(res, 400, "Bạn phải đủ 18 tuổi");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return responseHandler(res, 400, "Email này đã được đăng ký");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      dateOfBirth,
      email,
      gender,
      password: hashedPassword,
      username,
    });

    await newUser.save();

    const token = generateToken(newUser);

    res.cookie("authToken", token, {
      httpOnly: true,
      maxAge: 90 * 24 * 60 * 60 * 1000,
    });

    return responseHandler(res, 201, "Đăng ký thành công", {
      token,
      user: newUser,
    });
  } catch (error) {
    return responseHandler(res, 500, error.message);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return responseHandler(res, 404, "Không tìm thấy người dùng");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return responseHandler(res, 401, "Mật khẩu không chính xác");
    }

    const token = generateToken(user);

    res.cookie("authToken", token, {
      httpOnly: true,
      maxAge: 90 * 24 * 60 * 60 * 1000,
    });

    return responseHandler(res, 200, "Đăng nhập thành công", {
      token,
      user,
    });
  } catch (error) {
    return responseHandler(res, 500, error.message);
  }
};

export const logoutUser = (_req, res) => {
  res.cookie("authToken", "", {
    expires: new Date(0),
    httpOnly: true,
  });

  return responseHandler(res, 200, "Đăng xuất thành công");
};
