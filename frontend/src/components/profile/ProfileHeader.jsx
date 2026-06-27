"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Camera, Check, Pencil, Save, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

export default function ProfileHeader({ profile, userId }) {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isEditCoverOpen, setIsEditCoverOpen] = useState(false);
  const [coverPreview, setCoverPreview] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [formName, setFormName] = useState(profile.name);
  const [formBirthday, setFormBirthday] = useState(
    profile.birthday.split("/").reverse().join("-"),
  );
  const [formGender, setFormGender] = useState(profile.gender);
  const coverInputRef = useRef(null);
  const avatarInputRef = useRef(null);
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) setCoverPreview(URL.createObjectURL(file));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) setAvatarPreview(URL.createObjectURL(file));
  };

  const removeAvatar = () => {
    setAvatarPreview(null);
    if (avatarInputRef.current) avatarInputRef.current.value = "";
  };

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35 }}
    >
      {/* Cover photo */}
      <div className="relative h-52 overflow-hidden rounded-xl bg-muted sm:h-64 md:h-80">
        {coverPreview ? (
          <Image alt="Cover" className="object-cover" fill src={coverPreview} />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <span className="font-bold text-4xl text-white/50">
              {profile.name
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </span>
          </div>
        )}

        <Button
          className="absolute right-3 bottom-3 gap-2 shadow-md"
          onClick={() => setIsEditCoverOpen(true)}
          size="sm"
          variant="secondary"
        >
          <Camera className="size-4" />
          <span className="hidden sm:inline">Chỉnh sửa ảnh bìa</span>
        </Button>
      </div>

      {/* Avatar + Info */}
      <div className="relative flex flex-col items-center px-4 sm:flex-row sm:items-end sm:gap-5">
        {/* Avatar */}
        <div className="-mt-16 sm:-mt-20">
          <Avatar className="size-32 border-4 border-background shadow-xl sm:size-36 lg:size-44">
            <AvatarFallback className="bg-blue-100 text-4xl text-blue-600 dark:bg-blue-900 dark:text-blue-300">
              {profile.name
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 2)}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Name + friends count */}
        <div className="mt-2 text-center sm:mt-0 sm:pb-3 sm:text-left">
          <h1 className="font-bold text-2xl md:text-3xl">{profile.name}</h1>
          <p className="text-muted-foreground text-sm">
            {profile.friendsCount} bạn bè
          </p>
          {userId && (
            <p className="text-muted-foreground text-xs">ID: {userId}</p>
          )}
        </div>

        {/* Edit profile button */}
        <div className="mt-3 sm:mt-0 sm:ml-auto sm:pb-3">
          <Button
            className="gap-2"
            onClick={() => setIsEditProfileOpen(true)}
            variant="outline"
          >
            <Pencil className="size-4" />
            Chỉnh sửa trang cá nhân
          </Button>
        </div>
      </div>

      {/* Edit profile dialog */}
      <Dialog onOpenChange={setIsEditProfileOpen} open={isEditProfileOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              Chỉnh sửa trang cá nhân
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Ảnh đại diện</Label>
              <Input
                accept="image/*"
                className="mt-1"
                onChange={handleAvatarChange}
                ref={avatarInputRef}
                type="file"
              />
              <AnimatePresence>
                {avatarPreview && (
                  <motion.div
                    animate={{ height: "auto", opacity: 1 }}
                    className="relative mt-2 overflow-hidden rounded-lg"
                    exit={{ height: 0, opacity: 0 }}
                    initial={{ height: 0, opacity: 0 }}
                  >
                    <Image
                      alt="Avatar preview"
                      className="mx-auto size-32 rounded-full object-cover"
                      height={128}
                      src={avatarPreview}
                      unoptimized
                      width={128}
                    />
                    <button
                      className="absolute top-1 right-1 flex size-6 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
                      onClick={removeAvatar}
                      type="button"
                    >
                      <X className="size-3.5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div>
              <Label htmlFor="profile-name">Tên</Label>
              <Input
                className="mt-1"
                id="profile-name"
                onChange={(e) => setFormName(e.target.value)}
                value={formName}
              />
            </div>
            <div>
              <Label htmlFor="profile-birthday">Ngày sinh</Label>
              <Input
                className="mt-1"
                id="profile-birthday"
                max={maxDateStr}
                onChange={(e) => setFormBirthday(e.target.value)}
                type="date"
                value={formBirthday}
              />
            </div>
            <div>
              <Label htmlFor="profile-gender">Giới tính</Label>
              <NativeSelect
                className="mt-1"
                id="profile-gender"
                onChange={(e) => setFormGender(e.target.value)}
                value={formGender}
              >
                <NativeSelectOption value="Nam">Nam</NativeSelectOption>
                <NativeSelectOption value="Nữ">Nữ</NativeSelectOption>
                <NativeSelectOption value="Khác">Khác</NativeSelectOption>
              </NativeSelect>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button
              className="gap-2"
              onClick={() => setIsEditProfileOpen(false)}
              variant="outline"
            >
              <X className="size-4" />
              Hủy
            </Button>
            <Button
              className="gap-2"
              onClick={() => setIsEditProfileOpen(false)}
            >
              <Check className="size-4" />
              Lưu thay đổi
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit cover dialog */}
      <Dialog onOpenChange={setIsEditCoverOpen} open={isEditCoverOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-center">Chỉnh sửa ảnh bìa</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              accept="image/*"
              onChange={handleCoverChange}
              ref={coverInputRef}
              type="file"
            />
            {coverPreview && (
              <div className="relative h-48 overflow-hidden rounded-lg">
                <Image
                  alt="Preview"
                  className="object-cover"
                  fill
                  src={coverPreview}
                />
              </div>
            )}
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button
              className="gap-2"
              onClick={() => {
                setCoverPreview(null);
                setIsEditCoverOpen(false);
              }}
              variant="outline"
            >
              <X className="size-4" />
              Hủy
            </Button>
            <Button
              className="gap-2"
              onClick={() => {
                setIsEditCoverOpen(false);
              }}
            >
              <Save className="size-4" />
              Lưu ảnh bìa
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
