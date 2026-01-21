import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Task = {
  id: number;
  title: string;
  completed: boolean;
  description: string;
};
type TasksState = {
  items: Task[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};
const initialState: TasksState = {
  items: [
 
  ],
  status: "idle",
  error: null,
};


const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    toggleTask(state, action: PayloadAction<number>) {
      const id = action.payload;
      const task = state.items.find((task) => task.id === id);
      if (task) task.completed = !task.completed;
    },
    
    addTask(
      state,
      action: PayloadAction<{ title: string; description: string }>
    ) {
      const { title, description } = action.payload;
      
      state.items.unshift({
        id: Date.now(),
        title,
        description,
        completed: false,
      });
    },
    updateTask(state, action: PayloadAction<{ id: number; title: string; description: string }>) {
      const { id, title, description } = action.payload;
      const task = state.items.find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.description = description;
      }
    },
    deleteTask(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.items = state.items.filter((task) => task.id !== id);
    },  
    setTasks(state, action: PayloadAction<Task[]>) {
      state.items = action.payload;
    },
  },
});
export default tasksSlice.reducer;
export const { toggleTask, addTask, updateTask, deleteTask, setTasks } = tasksSlice.actions;
