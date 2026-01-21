"use client";
import { Input } from "@/components/ui/input";

export default function TasksSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="mt-4">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search tasks..."
      />
    </div>
  );
}
