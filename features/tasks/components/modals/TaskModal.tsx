"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import TaskForm from "../forms/TaskForm";

type EditingTask = {
  id: number;
  title: string;
  description: string;
};

export default function TaskModal({
  isOpen,
  closeAdd,
  editingTask,
}: {
  isOpen: boolean;
  closeAdd: () => void;
  editingTask: EditingTask | null;
}) {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) closeAdd();
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {editingTask ? "Edit Task" : "Add Task"}
          </DialogTitle>
        </DialogHeader>

        <TaskForm onSuccess={closeAdd} editingTask={editingTask} />
      </DialogContent>
    </Dialog>
  );
}
