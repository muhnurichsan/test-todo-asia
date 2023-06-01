import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { task } = req.body;

    if (!task) {
      throw new Error("input tidak boleh kosong");
    }

    const newTask = await prismadb.todos.create({
      data: {
        task,
        done: false,
      },
    });

    res.status(201).json({
      error: false,
      message: "berhasil membuat task baru",
      data: newTask,
    });
  } catch (error: any) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
}
