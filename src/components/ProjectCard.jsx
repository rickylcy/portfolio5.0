// src/components/ProjectCard.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectImageViewer from "@/components/ProjectImageViewer";
import { ArrowUpRight, ExternalLink, FileText, Images, ZoomIn } from "lucide-react";

function getProjectImages(project) {
  const list = project.images || project.gallery || [];
  const images = list.length ? list : project.image ? [project.image] : [];
  return images.filter(Boolean);
}

function ImageTile({ src, title, index, className = "", onClick }) {
  return (
    <button
      type="button"
      className={`group/tile relative overflow-hidden bg-muted text-left ${className}`}
      onClick={onClick}
      aria-label={`View ${title} screenshot ${index + 1}`}
    >
      <Image
        src={src}
        alt={`${title} screenshot ${index + 1}`}
        fill
        className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/tile:scale-110 group-hover/tile:brightness-90"
        sizes="(max-width:768px) 100vw, 33vw"
      />
      <span className="absolute inset-0 bg-gradient-to-tr from-violet-950/45 via-transparent to-white/20 opacity-0 transition-opacity duration-500 group-hover/tile:opacity-100" />
      <span className="absolute right-2 top-2 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-white/90 text-violet-900 opacity-0 shadow-sm transition-all duration-300 group-hover/tile:translate-y-0 group-hover/tile:opacity-100 dark:bg-slate-900/90 dark:text-violet-200">
        <ZoomIn className="h-4 w-4" />
      </span>
    </button>
  );
}

function ProjectImageGallery({ project, images, onOpen }) {
  if (!images.length) {
    return (
      <div className="flex aspect-video items-center justify-center bg-muted text-sm text-muted-foreground">
        Screenshot coming soon
      </div>
    );
  }

  const visible = images.slice(0, 4);
  const remaining = images.length - visible.length;

  if (visible.length === 1) {
    return (
      <div className="aspect-video">
        <ImageTile
          src={visible[0]}
          title={project.title}
          index={0}
          className="h-full w-full"
          onClick={() => onOpen(0)}
        />
      </div>
    );
  }

  return (
    <div
      className={`grid aspect-video gap-1 ${
        visible.length === 2
          ? "grid-cols-2"
          : visible.length === 3
          ? "grid-cols-[1.35fr_1fr]"
          : "grid-cols-2"
      }`}
    >
      {visible.map((src, index) => (
        <div
          key={`${project.id}-preview-${src}`}
          className={`relative ${
            visible.length === 3 && index === 0 ? "row-span-2" : ""
          }`}
        >
          <ImageTile
            src={src}
            title={project.title}
            index={index}
            className="h-full w-full"
            onClick={() => onOpen(index)}
          />
          {remaining > 0 && index === visible.length - 1 ? (
            <button
              type="button"
              className="absolute inset-0 flex items-center justify-center bg-violet-950/70 text-sm font-semibold text-white backdrop-blur-[2px]"
              onClick={() => onOpen(index)}
              aria-label={`View ${remaining} more ${project.title} screenshots`}
            >
              +{remaining} more
            </button>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default function ProjectCard({ p }) {
  const images = getProjectImages(p);
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <Card className="portfolio-card-motion group overflow-hidden">
        <div className="relative">
          <ProjectImageGallery
            project={p}
            images={images}
            onOpen={setActiveImage}
          />
          {images.length > 1 ? (
            <div className="pointer-events-none absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-violet-900 shadow-sm backdrop-blur dark:bg-slate-900/90 dark:text-violet-200">
              <Images className="h-3.5 w-3.5" />
              {images.length}
            </div>
          ) : null}
        </div>

        <div className="p-4 flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
            {p.status ? (
              <Badge variant="outline" className="whitespace-nowrap">
                {p.status}
              </Badge>
            ) : null}
          </div>

          <p className="text-sm text-muted-foreground">{p.blurb}</p>

          <div className="flex flex-wrap gap-2">
            {p.tags?.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>

          <div className="mt-1 text-xs text-muted-foreground">
            {p.tech?.join(" · ")}
          </div>

          <div className="mt-2 flex gap-2">
            {p.demoUrl ? (
              <Button asChild size="sm">
                <Link
                  href={p.demoUrl}
                  target={p.demoUrl.startsWith("http") ? "_blank" : undefined}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Link>
              </Button>
            ) : null}
            <Button asChild size="sm" variant="outline">
              <Link href={p.caseUrl || "#"}>
                <FileText className="mr-2 h-4 w-4" />
                Case study
              </Link>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <Link href={`/projects/${p.id}`}>
                Details
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Card>

      <ProjectImageViewer
        open={activeImage !== null}
        title={p.title}
        description={p.status}
        images={images}
        activeIndex={activeImage}
        onActiveIndexChange={setActiveImage}
        onClose={() => setActiveImage(null)}
      />
    </>
  );
}
