import Link from "next/link";

export default function notfound() {
  return (
<section className="flex h-screen justify-center items-center bg-gray-900 transition-colors duration-300 hover:bg-black-100">
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-gray-800">Not Fout</h1>
        <p className="text-gray-600 mt-2">A Modern and Professional Design</p>
        <Link href="/" className="text-slate-400 text-2xl text-red-900">
        Volver inicio</Link>
    </div>
</section>


  )
}
