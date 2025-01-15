// src/app/components/AddTodo.tsx
"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function AddTodo() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newTodo: { title: string }) => {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      });
      if (!res.ok) throw new Error("Failed to add todo");
      return res.json();
    },

    onSuccess: () => {
      // Refresh the 'todos' list
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <div>
      {mutation.isPending ? (
        "Adding todo..."
      ) : (
        <>
          {mutation.isError && (
            <div>An error occurred:{mutation.error.message}</div>
          )}
          {mutation.isSuccess && <div>Todo added!</div>}

          <button onClick={() => mutation.mutate({ title: "Do Laundry" })}>
            Add Todo
          </button>
        </>
      )}
    </div>
  );
}
