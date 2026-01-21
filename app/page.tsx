import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="max-w-xl text-center space-y-6 px-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Task Manager App
        </h1>

        <p className="text-gray-600 text-lg">
          A simple and powerful task management app built with Next.js,
          Redux Toolkit, and Tailwind CSS.
        </p>

        <ul className="text-gray-500 text-sm space-y-1">
          <li>• Add, edit, and delete tasks</li>
          <li>• Filter, search, and organize your work</li>
          <li>• Persistent data with local storage</li>
        </ul>

        <Link
          href="/tasks"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Go to Tasks
        </Link>
      </div>
    </main>
  );
}
