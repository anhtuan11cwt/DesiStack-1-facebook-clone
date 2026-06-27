"use client";

import Image from "next/image";
import profilePosts from "@/data/profilePosts";

export default function PhotosContent() {
  const photos = profilePosts.filter(
    (post) => post.mediaType === "image" && post.mediaSrc,
  );

  return (
    <div className="mt-4">
      <h3 className="mb-4 font-semibold text-lg">Ảnh</h3>

      {photos.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {photos.map((post) => (
            <div
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl transition-transform hover:scale-105"
              key={post.id}
            >
              <Image
                alt={post.caption || "Photo"}
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                src={post.mediaSrc}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="py-8 text-center text-muted-foreground">
          Chưa có ảnh nào.
        </p>
      )}
    </div>
  );
}
