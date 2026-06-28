"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { loginUser } from "@/services/authService";
import useUserStore from "@/store/userStore";
import { loginSchema } from "@/validation/loginSchema";

export default function LoginForm({ className, onSubmittingChange, ...props }) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useUserStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    onSubmittingChange?.(true);

    try {
      const res = await loginUser(data);

      // Lưu user vào store + chuyển về trang chủ
      setUser(res.data.user);
      toast.success(res.message);
      reset();
      router.replace("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      onSubmittingChange?.(false);
    }
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="font-bold text-2xl">Đăng nhập tài khoản</h1>
          <p className="text-balance text-muted-foreground text-sm">
            Nhập email của bạn để đăng nhập
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor="login-email">Email</FieldLabel>
          <Input
            disabled={isSubmitting}
            id="login-email"
            placeholder="m@example.com"
            type="email"
            {...register("email")}
          />
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
        </Field>

        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="login-password">Mật khẩu</FieldLabel>
            <button
              className="ml-auto text-sm underline-offset-4 hover:underline disabled:pointer-events-none disabled:opacity-50"
              disabled={isSubmitting}
              type="button"
            >
              Quên mật khẩu?
            </button>
          </div>
          <div className="relative">
            <Input
              disabled={isSubmitting}
              id="login-password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
            />
            <button
              className="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
              disabled={isSubmitting}
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
              type="button"
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
          {errors.password && (
            <FieldError>{errors.password.message}</FieldError>
          )}
        </Field>

        <Field>
          <Button
            className="w-full gap-2"
            disabled={isSubmitting}
            type="submit"
          >
            <LogIn className="size-4" />
            {isSubmitting ? "Đang xử lý..." : "Đăng nhập"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
