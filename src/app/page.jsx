import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

async function loadTasks() {
  //  const res = await fetch('localh....') //Esta opcion puede ser mas factible si tiene el back-front por separado
  //  const data = await res.json()
  return await prisma.task.findMany();
}

export const revalidate = 60

export default async function HomePage() {
  const tasks = await loadTasks();

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </section>
  );
}
