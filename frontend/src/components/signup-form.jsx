"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { registerSchema } from "@/validation/registerSchema";

export default function SignupForm({ className, ...props }) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log("Register data:", data);
    reset();
    router.push("/");
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="font-bold text-2xl">Tạo tài khoản</h1>
          <p className="text-balance text-muted-foreground text-sm">
            Điền vào form bên dưới để tạo tài khoản
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor="register-username">Tên người dùng</FieldLabel>
          <Input
            id="register-username"
            placeholder="johndoe"
            {...register("username")}
          />
          {errors.username && (
            <FieldError>{errors.username.message}</FieldError>
          )}
        </Field>

        <Field>
          <FieldLabel htmlFor="register-email">Email</FieldLabel>
          <Input
            id="register-email"
            placeholder="m@example.com"
            type="email"
            {...register("email")}
          />
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
        </Field>

        <Field>
          <FieldLabel htmlFor="register-password">Mật khẩu</FieldLabel>
          <div className="relative">
            <Input
              id="register-password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
            />
            <button
              className="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
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
          <FieldDescription>Phải có ít nhất 8 ký tự.</FieldDescription>
          {errors.password && (
            <FieldError>{errors.password.message}</FieldError>
          )}
        </Field>

        <Field>
          <FieldLabel htmlFor="register-dob">Ngày sinh</FieldLabel>
          <Input
            id="register-dob"
            max={maxDateStr}
            type="date"
            {...register("dateOfBirth")}
          />
          {errors.dateOfBirth && (
            <FieldError>{errors.dateOfBirth.message}</FieldError>
          )}
        </Field>

        <Field>
          <FieldLabel>Giới tính</FieldLabel>
          <Controller
            control={control}
            name="gender"
            render={({ field }) => (
              <RadioGroup
                defaultValue={field.value}
                onValueChange={field.onChange}
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="male" value="male" />
                  <FieldLabel htmlFor="male">Nam</FieldLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="female" value="female" />
                  <FieldLabel htmlFor="female">Nữ</FieldLabel>
                </div>
              </RadioGroup>
            )}
          />
          {errors.gender && <FieldError>{errors.gender.message}</FieldError>}
        </Field>

        <Field>
          <Button className="w-full gap-2" type="submit">
            <UserPlus className="size-4" />
            Tạo tài khoản
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
