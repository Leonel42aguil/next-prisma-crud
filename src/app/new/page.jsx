"use client";

import { useRouter } from "next/navigation"; //* !Para eso funciona el useRoute para cuando termina quiero que me redirija a otra pagina
import { useEffect, useState } from "react";

export default function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    
    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json", // Corrige "application-json" a "application/json"
        },
      });
      const data = await res.json();
      console.log(data);
      alert('Editado con éxito'); // Cambia el mensaje de alerta para la edición
    } else {
      const title = e.target.title.value; 
      const description = e.target.description.value;
      
      const res = await fetch("api/tasks", {
        method: "POST", 
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      alert('Creado'); // Muestra un mensaje de alerta para la creación
    }
    
    router.refresh();
    router.push("/");
  };
  

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
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="description" className="font-bold text-sm">
          Description tarea
        </label>
        <textarea
          id="description"
          rows="3"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Tu tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Crear
        </button>

        {params.id && (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bond py-2 px-4 rounded ml-4"
            type="button"
            onClick={async () => {
              const res = await fetch(`/api/tasks/${params.id}`, {
                method: "DELETE"
              })
              const data = await res.json()
              router.push("/")
              router.refresh();
              alert('Borrado con éxito');
            }}
          >
            Delete
          </button>
        )} 
      </form>
    </div>
  );
}
