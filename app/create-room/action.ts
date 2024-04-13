"use server";

import { createRoom } from "@/data-access/rooms";
import { Room } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function CreateRoomAction(roomData: Omit<Room, "id" | "userId">) {
  const session = await getSession();
  console.log(session);

  if (!session) {
    throw new Error("You must be logged in to Create the Room");
  }

  const room = await createRoom(roomData, session.user.id);

  revalidatePath("/browse");
}
