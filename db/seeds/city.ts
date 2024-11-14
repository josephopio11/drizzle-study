import type db from "@/db";
import { eq } from "drizzle-orm";
import { city, state } from "../schema";
import cities from "./data/cities.json";

export default async function seed(db: db) {
  const insertable = await Promise.all(
    cities.map(async (city) => {
      const foundState = await db.query.state.findFirst({
        where: eq(state.name, city.stateName),
      });
      if (!foundState) {
        throw new Error("No state found with name: " + city.stateName);
      }
      return {
        ...city,
        stateId: foundState.id,
      };
    })
  );
  await db.insert(city).values(insertable);
}
