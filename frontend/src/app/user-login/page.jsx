"use client";

import { LogIn, UserPlus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import LoginForm from "@/components/login-form";
import SignupForm from "@/components/signup-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LoginPage() {
  const [tab, setTab] = useState("login");
  const [submitting, setSubmitting] = useState(false); // Khoá tab khi form đang submit

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <Tabs onValueChange={setTab} value={tab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger disabled={submitting} value="login">
                  <LogIn className="size-4" />
                  Đăng nhập
                </TabsTrigger>
                <TabsTrigger disabled={submitting} value="signup">
                  <UserPlus className="size-4" />
                  Đăng ký
                </TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <LoginForm onSubmittingChange={setSubmitting} />
              </TabsContent>
              <TabsContent value="signup">
                <SignupForm
                  onSubmittingChange={setSubmitting}
                  onSuccess={() => setTab("login")}
                />
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
