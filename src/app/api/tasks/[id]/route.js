import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(task);
}
export function PUT(request, { params }) {
  return NextResponse.json("Actualizando tarea " + params.id);
}
export async function DELETE(request, { params }) {
  try {
    const taskRemoved = await prisma.task.delete({
      where: {
        id: Number(params.id)
      },
    });
    console.log(taskRemoved);
    return NextResponse.json(taskRemoved);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
