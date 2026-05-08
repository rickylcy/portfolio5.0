"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import ScreenshotFrame from "@/components/ScreenshotFrame";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";

export default function ProjectImageViewer({
  open,
  title,
  description,
  images = [],
  activeIndex = 0,
  onActiveIndexChange,
  onClose,
}) {
  const hasImages = images.length > 0;
  const safeIndex = hasImages
    ? Math.min(Math.max(activeIndex ?? 0, 0), images.length - 1)
    : 0;
  const activeImage = hasImages ? images[safeIndex] : null;
  const canNavigate = images.length > 1;

  function goTo(index) {
    if (!canNavigate) return;
    const nextIndex = (index + images.length) % images.length;
    onActiveIndexChange?.(nextIndex);
  }

  function previous() {
    goTo(safeIndex - 1);
  }

  function next() {
    goTo(safeIndex + 1);
  }

  return (
    <Dialog open={open} onOpenChange={(nextOpen) => !nextOpen && onClose?.()}>
      <DialogContent className="w-[calc(100vw-1.5rem)] max-w-6xl overflow-hidden border-violet-200/80 bg-white/95 p-0 shadow-[0_28px_90px_-40px_rgba(31,38,135,0.65)] backdrop-blur dark:border-slate-700 dark:bg-slate-950/95 sm:rounded-3xl">
        <div className="border-b border-violet-100 bg-gradient-to-r from-violet-50 via-white to-white px-4 py-3 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 sm:px-6 sm:py-4">
          <DialogHeader className="space-y-1 pr-8 text-left">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-violet-100 px-2.5 py-1 text-[11px] font-semibold text-violet-900 dark:bg-violet-500/20 dark:text-violet-200">
                <Images className="h-3.5 w-3.5" />
                {hasImages ? `${safeIndex + 1} / ${images.length}` : "Gallery"}
              </span>
              {description ? (
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {description}
                </span>
              ) : null}
            </div>
            <DialogTitle className="text-base sm:text-xl">{title}</DialogTitle>
            <DialogDescription className="sr-only">
              Screenshot gallery for {title}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="bg-[radial-gradient(circle_at_1px_1px,rgba(109,40,217,0.12)_1px,transparent_0)] bg-[length:18px_18px] p-3 dark:bg-[radial-gradient(circle_at_1px_1px,rgba(167,139,250,0.16)_1px,transparent_0)] sm:p-5">
          <div className="relative">
            <div className="relative aspect-[2/1] max-h-[68vh] min-h-[240px]">
              {activeImage ? (
                <ScreenshotFrame
                  src={activeImage}
                  title={title}
                  index={safeIndex}
                  total={images.length}
                  fit="contain"
                  imageSizes="95vw"
                  priority
                  caption={description || "Product screenshot"}
                  className="h-full w-full"
                />
              ) : null}

              {canNavigate ? (
                <>
                  <Button
                    type="button"
                    size="icon"
                    variant="secondary"
                    className="absolute left-2 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-white/90 text-violet-950 shadow-lg backdrop-blur hover:bg-white dark:bg-slate-900/90 dark:text-violet-200 dark:hover:bg-slate-900 sm:left-4 sm:h-12 sm:w-12"
                    onClick={previous}
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    type="button"
                    size="icon"
                    variant="secondary"
                    className="absolute right-2 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-white/90 text-violet-950 shadow-lg backdrop-blur hover:bg-white dark:bg-slate-900/90 dark:text-violet-200 dark:hover:bg-slate-900 sm:right-4 sm:h-12 sm:w-12"
                    onClick={next}
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              ) : null}
            </div>
          </div>

          {canNavigate ? (
            <div className="mt-3 flex gap-2 overflow-x-auto rounded-2xl border border-violet-100 bg-white/85 p-2 dark:border-slate-800 dark:bg-slate-900/80 sm:mt-4">
              {images.map((src, index) => (
                <button
                  key={`${title}-viewer-thumb-${src}`}
                  type="button"
                  className={`group relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border bg-muted transition sm:h-20 sm:w-32 ${
                    index === safeIndex
                      ? "border-violet-700 ring-2 ring-violet-200 dark:border-violet-300 dark:ring-violet-500/30"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => onActiveIndexChange?.(index)}
                  aria-label={`Open screenshot ${index + 1}`}
                >
                  <Image
                    src={src}
                    alt={`${title} thumbnail ${index + 1}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="128px"
                  />
                  <span className="absolute bottom-1 right-1 rounded-full bg-slate-950/75 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                    {index + 1}
                  </span>
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
