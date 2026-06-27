"use client";

import {
  Briefcase,
  Cake,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Pencil,
  Phone,
} from "lucide-react";
import { useState } from "react";
import EditBio from "@/components/profile/EditBio";
import { Button } from "@/components/ui/button";
import profile from "@/data/profile";

const infoItems = [
  { icon: MapPin, label: "Sống tại", value: profile.livingIn },
  { icon: Heart, label: "Mối quan hệ", value: profile.relationship },
  { icon: Briefcase, label: "Làm việc tại", value: profile.work },
  { icon: GraduationCap, label: "Học tại", value: profile.education },
  { icon: Phone, label: "Số điện thoại", value: profile.phone },
  { icon: Mail, label: "Email", value: profile.email },
  { icon: Cake, label: "Ngày sinh", value: profile.birthday },
];

export default function IntroCard() {
  const [isEditBioOpen, setIsEditBioOpen] = useState(false);

  return (
    <>
      <div className="mt-4 rounded-2xl border bg-card p-5 shadow-sm">
        <h3 className="mb-4 font-semibold text-lg">Giới thiệu</h3>

        {profile.bio && (
          <p className="mb-4 text-center text-muted-foreground text-sm italic">
            {profile.bio}
          </p>
        )}

        <div className="space-y-5">
          {infoItems.map(
            (item) =>
              item.value && (
                <div className="flex items-center gap-3" key={item.label}>
                  <item.icon className="size-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground text-xs">
                      {item.label}
                    </p>
                    <p className="font-medium text-sm">{item.value}</p>
                  </div>
                </div>
              ),
          )}
        </div>

        <Button
          className="mt-5 w-full gap-2"
          onClick={() => setIsEditBioOpen(true)}
          variant="outline"
        >
          <Pencil className="size-4" />
          Chỉnh sửa chi tiết
        </Button>
      </div>

      <EditBio isOpen={isEditBioOpen} onClose={() => setIsEditBioOpen(false)} />
    </>
  );
}
