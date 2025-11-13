// src/components/client/ProjectsGrid.jsx
"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsGrid({ initial }) {
  const allTags = useMemo(() => {
    const s = new Set();
    initial.forEach((p) => p.tags?.forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, [initial]);

  const [query, setQuery] = useState("");
  const [active, setActive] = useState(new Set());

  function toggleTag(t) {
    const next = new Set(active);
    next.has(t) ? next.delete(t) : next.add(t);
    setActive(next);
  }

  const list = initial.filter((p) => {
    const q = query.trim().toLowerCase();
    const matchesQ =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.blurb.toLowerCase().includes(q) ||
      (p.tags || []).some((t) => t.toLowerCase().includes(q)) ||
      (p.tech || []).some((t) => t.toLowerCase().includes(q));
    const matchesTags =
      active.size === 0 || (p.tags || []).some((t) => active.has(t));
    return matchesQ && matchesTags;
  });

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Projects
        </h1>
        <Input
          placeholder="Search title, tech, or tags…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="md:w-80"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {allTags.map((t) => (
          <button
            key={t}
            onClick={() => toggleTag(t)}
            className="focus:outline-none"
            aria-pressed={active.has(t)}
          >
            <Badge
              variant={active.has(t) ? "default" : "secondary"}
              className="cursor-pointer"
            >
              {t}
            </Badge>
          </button>
        ))}
        {active.size > 0 ? (
          <button
            onClick={() => setActive(new Set())}
            className="text-sm underline text-muted-foreground ml-2"
          >
            Clear filters
          </button>
        ) : null}
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>

      <div className="mt-6 text-sm text-muted-foreground">
        Showing {list.length} of {initial.length}
      </div>
    </section>
  );
}
