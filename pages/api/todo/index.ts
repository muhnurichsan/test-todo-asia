import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const todos = await prismadb.todos.findMany();

    res.status(201).json({
      error: false,
      message: "berhasil mendapatkan task",
      data: todos,
    });
  } catch (error: any) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
}
