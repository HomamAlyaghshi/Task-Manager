"use client";
import { Check, Trash2 } from "lucide-react";
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { toggleTask } from "@/features/tasks/tasksSlice";
import { deleteTask } from "@/features/tasks/tasksSlice";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

export default function TasksList({
  onEdit,
  filter,
  search,
}: {
  onEdit: (task: { id: number; title: string; description: string }) => void;
  filter: "all" | "active" | "completed";
  search: string;
}) {
  function highlightText(text: string, query: string) {
    const q = query.trim();
    if (!q) return text;
  
    const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escaped})`, "ig");
  
    const parts = text.split(regex);
  
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  }

  const tasks = useAppSelector((state) => state.tasks.items);
  const dispatch = useAppDispatch();
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });
  const searchedTasks = filteredTasks.filter((task) => {
  return `${task.title} ${task.description}`.toLowerCase().includes(search.toLowerCase());
  });
  const sortedTasks = [...searchedTasks].sort((a, b) => {
    if (a.completed !== b.completed) return a.completed ? 1 : -1;
    return b.id - a.id;
  });
  return (
    <div className="mt-6 space-y-4">
      {sortedTasks.length === 0 && (
        <div className="text-center py-8">
          <p className="text-xl text-gray-700">
            {filter === "all"
              ? "No tasks yet"
              : filter === "active"
              ? "No active tasks"
              : "No completed tasks"}
          </p>
          <p className="text-sm mt-2 text-gray-500">
            {filter === "all"
              ? "Please add your tasks here."
              : "Try changing the filter."}
          </p>
        </div>
      )}
      {sortedTasks.length > 0 && (
        <div className="space-y-4 mt-4 ">
          {sortedTasks.map((task) => (
            <div
              key={task.id}
              onClick={() => dispatch(toggleTask(task.id))}
              onDoubleClick={() =>
                onEdit({
                  id: task.id,
                  title: task.title,
                  description: task.description,
                })
              }
              className="bg-white p-4 flex items-center justify-between rounded-lg shadow-md border border-amber-200 transition-shadow hover:shadow-lg space-y-1"
            >
              <div>
                <h3
                  className={`text-lg font-medium text-gray-900 ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {highlightText(task.title, search)}
                </h3>
                <p className="text-sm text-gray-600">{highlightText(task.description, search)}</p>
              </div>
              {task.completed && <Check size={20} className="text-green-500" />}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Trash2
                    size={20}
                    className="text-red-500 cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                  />
                </AlertDialogTrigger>

                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete task?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. The task will be permanently
                      deleted.
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => dispatch(deleteTask(task.id))}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
