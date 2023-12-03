import { db } from "../db";

export type DetectionMethod = Awaited<
  ReturnType<typeof getDetectionMethods>
>[number];

export async function getDetectionMethods() {
  return await db.detectionMethod.findMany({
    orderBy: {
      order: "asc",
    },
  });
}

export async function getDetectionMethodBySlug(slug: string) {
  return await db.detectionMethod.findUnique({
    where: {
      slug,
    },
    include: {
      planets: true,
    },
  });
}
