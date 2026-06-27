import * as yup from "yup";

export const registerSchema = yup.object({
  dateOfBirth: yup
    .string()
    .required("Vui lòng nhập ngày sinh")
    .test("is-18", "Bạn phải đủ 18 tuổi", (value) => {
      if (!value) return false;
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        return age - 1 >= 18;
      }
      return age >= 18;
    }),
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  gender: yup
    .string()
    .oneOf(["male", "female"], "Vui lòng chọn giới tính")
    .required("Vui lòng chọn giới tính"),
  password: yup
    .string()
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
    .required("Vui lòng nhập mật khẩu"),
  username: yup
    .string()
    .min(3, "Tên người dùng phải có ít nhất 3 ký tự")
    .required("Vui lòng nhập tên người dùng"),
});
