// src/components/ProjectCard.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink, FileText } from "lucide-react";

export default function ProjectCard({ p }) {
  return (
    <Card className="portfolio-card-motion group overflow-hidden">
      <div className="aspect-video relative bg-muted">
        <Image
          src={p.image || "/projects/placeholder.png"}
          alt={p.title}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-violet-900/20 via-transparent to-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
  );
}
