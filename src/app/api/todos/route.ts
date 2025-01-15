// src/app/api/todos/route.ts

import { NextResponse } from "next/server"

const todos = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Build a Next.js App" },
  { id: 3, title: "Understand React Query" },
]

export async function GET() {
  return NextResponse.json(todos)
}

export async function POST(request: Request) {
  const newTodo = await request.json()

  if (!newTodo?.title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 })
  }

  // Generate a new id for the todo
  const newTodoWithId = { id: todos.length + 1, title: newTodo.title }

  todos.push(newTodoWithId)

  return NextResponse.json(newTodoWithId, { status: 201 })
}
