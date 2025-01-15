import AddTodo from "@/components/AddTodo";
import Todos from "@/components/Todos";

export default function Home() {
  return (
    <div className="flex justfiy-center items-center flex-col gap-4">
      <AddTodo />

      <h1 className="text-2xl font-bold">Todos</h1>
      <div className="p-4 border border-gray-200 rounded-md">
        <Todos />
      </div>
    </div>
  );
}
