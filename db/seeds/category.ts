import type db from "@/db";
import { category } from "../schema";
import categories from "./data/categories.json";

export default async function seed(db: db) {
  await db.insert(category).values(categories);
}
