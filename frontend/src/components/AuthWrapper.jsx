"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { checkUserAuth } from "@/services/authService";
import useUserStore from "@/store/userStore";
import Header from "./Header";

const authPages = ["/user-login", "/user-register"];

export default function AuthWrapper({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, setUser, clearUser } = useUserStore();
  const checked = useRef(false);

  // Kiểm tra phiên đăng nhập khi app mount (chỉ 1 lần)
  useEffect(() => {
    if (checked.current) return;
    checked.current = true;

    (async () => {
      try {
        const res = await checkUserAuth();
        setUser(res.data.user);

        // Đang ở trang login nhưng đã có token → đẩy về home
        if (authPages.includes(pathname)) {
          router.replace("/");
        }
      } catch {
        clearUser();

        // Token hết hạn/không hợp lệ → đá về login
        if (!authPages.includes(pathname)) {
          router.replace("/user-login");
        }
      }
    })();
  }, [router, setUser, pathname, clearUser]);

  const _isAuthPage = authPages.includes(pathname);

  const isAuthPage = authPages.includes(pathname);

  return (
    <>
      {!isAuthPage && user && <Header />}
      {children}
    </>
  );
}
