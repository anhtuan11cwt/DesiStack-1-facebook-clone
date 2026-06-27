"use client";

import { Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import NewPostForm from "@/components/NewPostForm";
import PostCard from "@/components/PostCard";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import profilePosts from "@/data/profilePosts";

export default function PostContent() {
  const [isPostFormOpen, setIsPostFormOpen] = useState(false);

  return (
    <div className="space-y-4 py-4">
      {/* Create post trigger */}
      <button
        className="flex w-full cursor-pointer items-center gap-3 rounded-2xl border bg-card p-4 text-left shadow-sm transition-shadow hover:shadow-md"
        onClick={() => setIsPostFormOpen(true)}
        type="button"
      >
        <Avatar className="size-10 shrink-0">
          <AvatarFallback className="bg-blue-100 text-blue-600 text-sm dark:bg-blue-900 dark:text-blue-300">
            U
          </AvatarFallback>
        </Avatar>
        <Input
          className="h-10 flex-1 cursor-pointer rounded-full border-none bg-muted/50 text-sm placeholder:text-muted-foreground focus-visible:ring-0"
          placeholder="Bạn đang nghĩ gì?"
          readOnly
        />
        <ImageIcon className="size-5" />
      </button>

      <NewPostForm
        isPostFormOpen={isPostFormOpen}
        setIsPostFormOpen={setIsPostFormOpen}
      />

      {profilePosts.length > 0 ? (
        profilePosts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <p className="py-8 text-center text-muted-foreground">
          Chưa có bài viết nào.
        </p>
      )}
    </div>
  );
}
