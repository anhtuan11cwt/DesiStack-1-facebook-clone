"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const sponsors = [
  {
    description: "Nền tảng triển khai frontend cho đội ngũ phát triển.",
    id: 1,
    image: "/vercel.svg",
    name: "Vercel",
    website: "https://vercel.com",
  },
  {
    description: "Framework React cho sản xuất với SSR và SSG.",
    id: 2,
    image: "/next.svg",
    name: "Next.js",
    website: "https://nextjs.org",
  },
  {
    description: "Cơ sở dữ liệu NoSQL linh hoạt cho ứng dụng hiện đại.",
    id: 3,
    image: "/file.svg",
    name: "MongoDB",
    website: "https://mongodb.com",
  },
  {
    description: "Quản lý và tối ưu hóa hình ảnh, video trên đám mây.",
    id: 4,
    image: "/globe.svg",
    name: "Cloudinary",
    website: "https://cloudinary.com",
  },
  {
    description: "Nghiên cứu và triển khai trí tuệ nhân tạo tiên tiến.",
    id: 5,
    image: "/window.svg",
    name: "OpenAI",
    website: "https://openai.com",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function RightSidebar() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? sponsors : sponsors.slice(0, 3);

  return (
    <motion.aside
      animate={{ opacity: 1, x: 0 }}
      className="w-80 shrink-0"
      initial={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="sticky top-20">
        <h3 className="mb-4 px-1 font-semibold text-muted-foreground text-sm uppercase tracking-wider">
          Được tài trợ
        </h3>

        <motion.ul
          animate="visible"
          className="space-y-3"
          initial="hidden"
          variants={containerVariants}
        >
          <AnimatePresence>
            {displayed.map((sponsor) => (
              <motion.li
                className="group rounded-lg transition-shadow hover:shadow-md"
                key={sponsor.id}
                layout
                variants={itemVariants}
              >
                <a
                  className="flex gap-3 rounded-lg p-2 transition-colors hover:bg-muted/50"
                  href={sponsor.website}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="size-12 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      alt={sponsor.name}
                      className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                      height={48}
                      src={sponsor.image}
                      width={48}
                    />
                  </div>
                  <div className="flex min-w-0 flex-col justify-center">
                    <span className="truncate font-semibold text-sm">
                      {sponsor.name}
                    </span>
                    <span className="line-clamp-2 text-muted-foreground text-xs">
                      {sponsor.description}
                    </span>
                    <span className="mt-0.5 inline-flex items-center gap-1 text-blue-500 text-xs">
                      {sponsor.website.replace("https://", "")}
                      <ExternalLink className="size-3" />
                    </span>
                  </div>
                </a>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {sponsors.length > 3 && (
          <Button
            className="mt-2 w-full justify-start text-muted-foreground text-sm"
            onClick={() => setShowAll(!showAll)}
            variant="ghost"
          >
            {showAll ? "Thu gọn" : `Xem thêm (${sponsors.length - 3})`}
          </Button>
        )}
      </div>
    </motion.aside>
  );
}
