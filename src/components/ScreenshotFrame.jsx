"use client";

import Image from "next/image";
import { ZoomIn } from "lucide-react";

export default function ScreenshotFrame({
  src,
  title,
  index = 0,
  total,
  className = "",
  imageClassName = "",
  imageSizes = "100vw",
  priority = false,
  fit = "cover",
  caption,
  onClick,
}) {
  const frameLabel = caption || `${title} screen ${index + 1}`;
  const imageFit = fit === "contain" ? "object-contain" : "object-cover";
  const Wrapper = onClick ? "button" : "div";

  return (
    <Wrapper
      type={onClick ? "button" : undefined}
      onClick={onClick}
      aria-label={
        onClick ? `View ${title} screenshot ${index + 1}` : undefined
      }
      className={`group/screenshot relative block overflow-hidden rounded-2xl border border-violet-100 bg-white text-left shadow-[0_18px_46px_-34px_rgba(49,46,129,0.65)] dark:border-slate-700 dark:bg-slate-950 ${className}`}
    >
      <div className="flex h-7 items-center gap-2 border-b border-violet-100 bg-gradient-to-r from-violet-50 via-white to-white px-3 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
        <span className="h-2 w-2 rounded-full bg-rose-300" />
        <span className="h-2 w-2 rounded-full bg-amber-300" />
        <span className="h-2 w-2 rounded-full bg-emerald-300" />
        <span className="ml-1 min-w-0 truncate rounded-full bg-white/75 px-2 py-0.5 text-[10px] font-semibold text-slate-500 shadow-sm dark:bg-slate-800/85 dark:text-slate-300">
          {frameLabel}
        </span>
      </div>

      <div className="relative h-[calc(100%-1.75rem)] min-h-0 bg-[radial-gradient(circle_at_1px_1px,rgba(109,40,217,0.08)_1px,transparent_0)] bg-[length:16px_16px] p-1.5 dark:bg-[radial-gradient(circle_at_1px_1px,rgba(167,139,250,0.12)_1px,transparent_0)]">
        <div className="relative h-full overflow-hidden rounded-xl bg-white shadow-inner dark:bg-slate-100">
          <Image
            src={src}
            alt={`${title} screenshot ${index + 1}`}
            fill
            className={`bg-white ${imageFit} object-center transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              onClick ? "group-hover/screenshot:scale-[1.035]" : ""
            } ${imageClassName}`}
            sizes={imageSizes}
            priority={priority}
          />
        </div>
      </div>

      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/28 via-slate-950/0 to-transparent opacity-0 transition-opacity duration-300 group-hover/screenshot:opacity-100" />

      {total ? (
        <span className="pointer-events-none absolute bottom-2 left-2 rounded-full bg-white/92 px-2.5 py-1 text-[11px] font-bold text-violet-900 shadow-sm backdrop-blur dark:bg-slate-900/90 dark:text-violet-200">
          {index + 1} / {total}
        </span>
      ) : null}

      {onClick ? (
        <span className="pointer-events-none absolute right-2 top-9 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-white/92 text-violet-900 opacity-0 shadow-sm backdrop-blur transition-all duration-300 group-hover/screenshot:translate-y-0 group-hover/screenshot:opacity-100 dark:bg-slate-900/90 dark:text-violet-200">
          <ZoomIn className="h-4 w-4" />
        </span>
      ) : null}
    </Wrapper>
  );
}
