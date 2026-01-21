"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAppDispatch } from "@/store/hooks";
import { addTask, updateTask } from "@/features/tasks/tasksSlice";

export default function TaskForm({
  onSuccess,
  editingTask,
}: {
  onSuccess: () => void;
  editingTask: { id: number; title: string; description: string } | null;

}) {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    if (editingTask) {
      dispatch(
        updateTask({
          id: editingTask.id,
          title,
          description,
        })
      );
    } else {
      dispatch(addTask({ title, description }));
    }
    setTitle("");
    setDescription("");
    onSuccess();

  };
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingTask]);
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description"
        />
      </div>

      <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-700">
        Save
      </Button>
    </form>
  );
}
