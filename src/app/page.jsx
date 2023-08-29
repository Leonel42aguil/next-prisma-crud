import { prisma } from "@/libs/prisma";

async function loadTasks() {
  //  const res = await fetch('localh....') //Esta opcion puede ser mas factible si tiene el back-front por separado
  //  const data = await res.json()
  return await prisma.task.findMany();
}

export default async function HomePage() {
  const tasks = await loadTasks();

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((t) => (
          <div key={t.id} className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer">
            <h3 className="font-bold text-2xl mb-2">{t.title}</h3>
            <p>{t.description}</p>
            {/* <p>{new Date(t.createdAt).toLocaleDateString()}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
