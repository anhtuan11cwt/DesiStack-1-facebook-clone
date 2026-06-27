"use client";

import { Check, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function EditBio({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    bio: "",
    education: "",
    hometown: "",
    livingIn: "",
    phone: "",
    relationship: "",
    workPlace: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Chỉnh sửa thông tin</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="bio">Giới thiệu</Label>
            <Textarea
              className="mt-1"
              id="bio"
              onChange={(e) => handleChange("bio", e.target.value)}
              placeholder="Viết đôi điều về bản thân..."
              value={formData.bio}
            />
          </div>
          <div>
            <Label htmlFor="livingIn">Sống tại</Label>
            <Input
              className="mt-1"
              id="livingIn"
              onChange={(e) => handleChange("livingIn", e.target.value)}
              value={formData.livingIn}
            />
          </div>
          <div>
            <Label htmlFor="relationship">Mối quan hệ</Label>
            <Input
              className="mt-1"
              id="relationship"
              onChange={(e) => handleChange("relationship", e.target.value)}
              value={formData.relationship}
            />
          </div>
          <div>
            <Label htmlFor="workPlace">Nơi làm việc</Label>
            <Input
              className="mt-1"
              id="workPlace"
              onChange={(e) => handleChange("workPlace", e.target.value)}
              value={formData.workPlace}
            />
          </div>
          <div>
            <Label htmlFor="education">Học vấn</Label>
            <Input
              className="mt-1"
              id="education"
              onChange={(e) => handleChange("education", e.target.value)}
              value={formData.education}
            />
          </div>
          <div>
            <Label htmlFor="phone">Số điện thoại</Label>
            <Input
              className="mt-1"
              id="phone"
              onChange={(e) => handleChange("phone", e.target.value)}
              value={formData.phone}
            />
          </div>
          <div>
            <Label htmlFor="hometown">Quê quán</Label>
            <Input
              className="mt-1"
              id="hometown"
              onChange={(e) => handleChange("hometown", e.target.value)}
              value={formData.hometown}
            />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button
              className="gap-2"
              onClick={onClose}
              type="button"
              variant="outline"
            >
              <X className="size-4" />
              Hủy
            </Button>
            <Button className="gap-2" type="submit">
              <Check className="size-4" />
              Lưu thay đổi
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
