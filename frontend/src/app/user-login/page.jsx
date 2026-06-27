"use client";

import { LogIn, UserPlus } from "lucide-react";
import Image from "next/image";
import LoginForm from "@/components/login-form";
import SignupForm from "@/components/signup-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <Tabs defaultValue="login">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">
                  <LogIn className="size-4" />
                  Đăng nhập
                </TabsTrigger>
                <TabsTrigger value="signup">
                  <UserPlus className="size-4" />
                  Đăng ký
                </TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <LoginForm />
              </TabsContent>
              <TabsContent value="signup">
                <SignupForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          alt="Ảnh nền"
          className="object-cover dark:brightness-[0.2] dark:grayscale"
          fill
          src="/sponsored_img.png"
        />
      </div>
    </div>
  );
}
