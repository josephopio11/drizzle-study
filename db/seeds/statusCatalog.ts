import type db from "@/db";
import { statusCatalog } from "../schema";
import statusCatalogs from "./data/statusCatalogs.json";

export default async function seed(db: db) {
  await db.insert(statusCatalog).values(statusCatalogs);
}
