import type db from "@/db";
import { state } from "../schema";
import states from "./data/states.json";

export default async function seed(db: db) {
  await db.insert(state).values(states);
}
