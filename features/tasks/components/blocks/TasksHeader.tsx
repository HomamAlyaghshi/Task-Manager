"use client";

export default function TasksHeader({
  openAdd,
}: {
  openAdd: () => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="font-semibold text-gray-900 text-2xl">Tasks</h1>
        <p className="text-sm text-gray-500">Task Manager</p>
      </div>

      <button
        onClick={openAdd}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        + Add Task
      </button>
    </div>
  );
}
