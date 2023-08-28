"use client"

export default function NewPage() {
  
  const onSubmit = async (e) => {
  e.preventDefault()
  const title = e.target.title.value
  const description = e.target.description.value

   const res = await fetch('api/tasks', {
    method: 'POST',
    body: JSON.stringify({title, description}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    const data = await res.json()
   console.log(data);
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10" onSubmit={onSubmit}>
        <label htmlFor="title" className="font-bold text-sm">
          Titulo de la tarea
        </label>
        <input
          id="title"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="titulo"
          type="text"
        />
        <label htmlFor="description" className="font-bold text-sm">Description tarea</label>
        <textarea
          id="description"
          rows="3"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Tu tarea"
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Crear
        </button>
      </form>
    </div>
  );
}
