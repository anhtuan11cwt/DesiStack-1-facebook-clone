import { Router } from "express";

import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/authController.js";

const router = Router();

/**
 * @openapi
 * /auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Đăng ký tài khoản mới
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *               - gender
 *               - dateOfBirth
 *             properties:
 *               username:
 *                 type: string
 *                 minLength: 3
 *                 example: tuan123
 *               email:
 *                 type: string
 *                 format: email
 *                 example: tuan@gmail.com
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 example: matkhau123
 *               gender:
 *                 type: string
 *                 enum: [male, female]
 *                 example: male
 *               dateOfBirth:
 *                 type: string
 *                 format: date
 *                 example: "2000-05-10"
 *     responses:
 *       201:
 *         description: Đăng ký thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Đăng ký thành công
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                           example: 665abc123def456789abc123
 *                         username:
 *                           type: string
 *                           example: tuan123
 *                         email:
 *                           type: string
 *                           example: tuan@gmail.com
 *                         gender:
 *                           type: string
 *                           example: male
 *                         dateOfBirth:
 *                           type: string
 *                           format: date-time
 *                           example: "2000-05-10T00:00:00.000Z"
 *                         profilePicture:
 *                           type: string
 *                           nullable: true
 *                           example: null
 *                         coverPhoto:
 *                           type: string
 *                           nullable: true
 *                           example: null
 *                         followerCount:
 *                           type: number
 *                           example: 0
 *                         followers:
 *                           type: array
 *                           items:
 *                             type: string
 *                           example: []
 *                         following:
 *                           type: array
 *                           items:
 *                             type: string
 *                           example: []
 *                         followingCount:
 *                           type: number
 *                           example: 0
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                           example: "2025-06-28T10:30:00.000Z"
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                           example: "2025-06-28T10:30:00.000Z"
 *                         __v:
 *                           type: number
 *                           example: 0
 *                     token:
 *                       type: string
 *                       example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       400:
 *         description: Lỗi validation hoặc email đã tồn tại
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Email này đã được đăng ký"
 *                 data:
 *                   nullable: true
 *                   example: null
 */
router.post("/register", registerUser);

/**
 * @openapi
 * /auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Đăng nhập
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: tuan@gmail.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: matkhau123
 *     responses:
 *       200:
 *         description: Đăng nhập thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Đăng nhập thành công
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                           example: 665abc123def456789abc123
 *                         username:
 *                           type: string
 *                           example: tuan123
 *                         email:
 *                           type: string
 *                           example: tuan@gmail.com
 *                         gender:
 *                           type: string
 *                           example: male
 *                         dateOfBirth:
 *                           type: string
 *                           format: date-time
 *                           example: "2000-05-10T00:00:00.000Z"
 *                         profilePicture:
 *                           type: string
 *                           nullable: true
 *                           example: null
 *                         coverPhoto:
 *                           type: string
 *                           nullable: true
 *                           example: null
 *                         followerCount:
 *                           type: number
 *                           example: 0
 *                         followers:
 *                           type: array
 *                           items:
 *                             type: string
 *                           example: []
 *                         following:
 *                           type: array
 *                           items:
 *                             type: string
 *                           example: []
 *                         followingCount:
 *                           type: number
 *                           example: 0
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                           example: "2025-06-28T10:30:00.000Z"
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                           example: "2025-06-28T10:30:00.000Z"
 *                         __v:
 *                           type: number
 *                           example: 0
 *                     token:
 *                       type: string
 *                       example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       401:
 *         description: Sai mật khẩu
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Mật khẩu không chính xác
 *                 data:
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: Không tìm thấy người dùng
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Không tìm thấy người dùng
 *                 data:
 *                   nullable: true
 *                   example: null
 */
router.post("/login", loginUser);

/**
 * @openapi
 * /auth/logout:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Đăng xuất
 *     responses:
 *       200:
 *         description: Đăng xuất thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Đăng xuất thành công
 *                 data:
 *                   nullable: true
 *                   example: null
 */
router.post("/logout", logoutUser);

export default router;
