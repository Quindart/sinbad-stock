"use client";

import React from "react";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { useRouter } from "next/navigation";

const slugs = [
  "amazonaws",
  "apache",
  "apple",
  "archlinux",
  "astro",
  "digitalocean",
  "docker",
  "firebase",
  "git",
  "github",
  "gitlab",
  "graphql",
  "jira",
  "javascript",
  "linux",
  "mongodb",
  "mysql",
  "nextdotjs",
  "nginx",
  "nodedotjs",
  "numpy",
  "openai",
  "pandas",
  "pocketbase",
  "postgresql",
  "prisma",
  "python",
  "pytorch",
  "react",
  "redis",
  "tailwindcss",
  "typescript",
  "ubuntu",
  "vercel",
  "zod",
  "mui",
  "ant design",
  "shadcn ui",
  "react native",
  "react router",
  "tanstack",
  "render",
  "supabase"
];

interface TechnologiesProps {
  liveLinks?: boolean;
}

export default function Technologies({ liveLinks = false }: TechnologiesProps) {
  const router = useRouter();
  const images = slugs.map(slug => `https://cdn.simpleicons.org/${slug}`);
  
  const handleIconClick = (index: number) => {
    if (!liveLinks) return;
    
    const slug = slugs[index];
    if (slug) {
      router.push(`${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/tags/${slug}`);
    }
  };
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <IconCloud 
        images={images} 
        onIconClick={liveLinks ? handleIconClick : undefined}
      />
    </div>
  );
}
