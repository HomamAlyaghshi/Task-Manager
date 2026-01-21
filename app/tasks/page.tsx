"use client";
import TasksHeader from "@/features/tasks/components/blocks/TasksHeader";
import TasksList from "@/features/tasks/components/blocks/TasksList";
import TaskModal from "@/features/tasks/components/modals/TaskModal";
import useTasksPersist from "@/features/tasks/hooks/useTasksPersist";
import TasksFilters from "@/features/tasks/components/blocks/TasksFilters";
import TasksSearch from "@/features/tasks/components/blocks/TasksSearch";
import { useState } from "react";
import {useAppSelector} from "@/store/hooks";

export default function TasksPage() {
  useTasksPersist();
  const [isOpen, setIsOpen] = useState(false);
  const openAdd = () => {
    setEditingTask(null);
    setIsOpen(true);
  };
  
  const closeAdd = () => {
    setIsOpen(false);
    setEditingTask(null);
  };
  
  const [editingTask, setEditingTask] = useState<null | {
    id: number;
    title: string;
    description: string;
  }>(null);
  const openEdit = (task: {
    id: number;
    title: string;
    description: string;
  }) => {
    setEditingTask(task);
    setIsOpen(true);
  };
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const tasks = useAppSelector((state) => state.tasks.items);
  const totalTasks = tasks.length;
  const activeTasks = tasks.filter((task) => !task.completed).length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const [search, setSearch] = useState("");


  return (
    <div className="max-w-5xl mx-auto p-6">
      <TasksHeader openAdd={openAdd} />
      <TasksFilters value={filter} onChange={setFilter} counts={{
    all: totalTasks,
    active: activeTasks,
    completed: completedTasks,
  }} />
  <TasksSearch value={search} onChange={setSearch} />
      <TaskModal isOpen={isOpen} closeAdd={closeAdd} editingTask={editingTask} />
      <TasksList onEdit={openEdit} filter={filter} search={search} />
      </div>
  );
}
