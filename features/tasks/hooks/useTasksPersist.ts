"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setTasks } from "@/features/tasks/tasksSlice";

const STORAGE_KEY = "tasks";

export default function useTasksPersist() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.tasks.items);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        dispatch(setTasks(parsed));
      }
    } catch {
      // ignore invalid data
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);
}
