// src/components/Todos.tsx
"use client"

import useTodos from "@/hooks/useTodos";
import { useQuery } from "@tanstack/react-query";

const fetchTodos = async () => {
  const res = await fetch("/api/todos");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export default function Todos() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  // Using the hook:
  const {data: todoData, error: todoError, isLoading: todoLoading } = useTodos();

  // Loading and Error handling (no hook):
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Loading and Error handling (with hook):
  if (todoLoading) return <p>Loading...</p>;
  if (todoError) return <p>Error: {todoError.message}</p>;


  return (
    <ul>

      {/* no hook: */}
      {data.map((todo: { id: number; title: string }) => (
        <li key={todo.id}>{todo.title}</li>
      ))}

      {/* Using the hook: */}
      {todoData.map((todo: { id: number; title: string }) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
