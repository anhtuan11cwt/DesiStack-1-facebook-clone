"use client";

import { EllipsisVertical, MessageCircle, UserX } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import mutualFriends from "@/data/mutualFriends";

export default function MutualFriends() {
  return (
    <div className="mt-4">
      <h3 className="mb-4 font-semibold text-lg">Bạn bè</h3>

      {mutualFriends.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {mutualFriends.map((friend) => {
            const initials = friend.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <div
                className="group relative rounded-xl border bg-card p-4 shadow-sm transition-shadow hover:shadow-lg"
                key={friend.id}
              >
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="size-16">
                    <AvatarFallback className="bg-blue-100 text-blue-600 text-lg dark:bg-blue-900 dark:text-blue-300">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-center font-semibold text-sm">
                    {friend.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {friend.mutualCount} bạn chung
                  </p>
                </div>

                {/* Dropdown */}
                <div className="absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon-xs" variant="ghost">
                        <EllipsisVertical className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                      <DropdownMenuItem>
                        <MessageCircle className="size-4" />
                        Nhắn tin
                      </DropdownMenuItem>
                      <DropdownMenuItem>Xem trang cá nhân</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem variant="destructive">
                        <UserX className="size-4" />
                        Hủy theo dõi
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="py-8 text-center text-muted-foreground">
          Chưa có bạn bè.
        </p>
      )}
    </div>
  );
}
