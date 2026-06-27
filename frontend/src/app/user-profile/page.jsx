"use client";

import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileTabs from "@/components/profile/ProfileTabs";
import RightSidebar from "@/components/RightSidebar";
import profile from "@/data/profile";

export default function UserProfilePage() {
  return (
    <>
      <Header />
      <LeftSidebar />

      <main className="min-h-screen bg-background pt-16">
        <div className="mx-auto flex max-w-[1600px] gap-6 px-4 lg:px-6">
          <div className="min-w-0 flex-1 md:ml-72">
            <div className="mx-auto max-w-4xl py-4">
              <ProfileHeader profile={profile} />
              <ProfileTabs />
            </div>
          </div>

          <div className="hidden xl:block">
            <RightSidebar />
          </div>
        </div>
      </main>
    </>
  );
}
