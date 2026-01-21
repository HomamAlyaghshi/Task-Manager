"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TasksFilters({
  value,
  onChange,
  counts,
}: {
  value: "all" | "active" | "completed";
  onChange: (value: "all" | "active" | "completed") => void;
  counts: { all: number; active: number; completed: number };
}) {
  return (
    <Tabs value={value} onValueChange={(v) => onChange(v as any)}>
      <TabsList>
        <TabsTrigger value="all">All ({counts.all})</TabsTrigger>
        <TabsTrigger value="active">Active ({counts.active})</TabsTrigger>
        <TabsTrigger value="completed">
          Completed ({counts.completed})
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
