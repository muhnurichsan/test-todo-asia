import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "DELETE") {
    return res.status(405).end();
  }

  try {
    const { id } = req.query;

    if (!id || typeof id !== "string") {
      throw new Error("Invalid ID");
    }

    await prismadb.todos.delete({
      where: {
        id,
      },
    });

    res.status(201).json({
      error: false,
      message: "berhasil hapus task",
    });
  } catch (error: any) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
}
