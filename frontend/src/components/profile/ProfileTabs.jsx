"use client";

import { useState } from "react";
import IntroCard from "@/components/profile/IntroCard";
import MutualFriends from "@/components/profile/MutualFriends";
import PhotosContent from "@/components/profile/PhotosContent";
import PostContent from "@/components/profile/PostContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <Tabs
      className="mt-6"
      defaultValue="posts"
      onValueChange={setActiveTab}
      value={activeTab}
    >
      <TabsList className="w-full" variant="line">
        <TabsTrigger className="flex-1" value="posts">
          Bài viết
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="about">
          Giới thiệu
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="friends">
          Bạn bè
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="photos">
          Ảnh
        </TabsTrigger>
      </TabsList>

      <TabsContent value="posts">
        <PostContent />
      </TabsContent>

      <TabsContent value="about">
        <IntroCard />
      </TabsContent>

      <TabsContent value="friends">
        <MutualFriends />
      </TabsContent>

      <TabsContent value="photos">
        <PhotosContent />
      </TabsContent>
    </Tabs>
  );
}
