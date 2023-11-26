"use strict";

import { readFile, readdir, writeFile } from "fs/promises";
import { join } from "path";
import { getPlaiceholder } from "plaiceholder";
import { cwd } from "process";

/**
 *
 * @param {string} image
 * @returns
 */
async function generatePlaceholderForImage(image) {
  const file = await readFile(image);

  const { base64 } = await getPlaiceholder(file);

  return base64;
}

/**
 *
 * @returns {Promise<string[]>}
 */
async function getImageNames() {
  const files = await readdir(join(cwd(), "public/images/planets"));

  const images = files.filter((file) => file.endsWith(".webp"));

  return images;
}

/**
 * @returns {Promise<Record<string, string>>}
 */
async function generatePlaceholders() {
  const images = await getImageNames();

  const promises = images.map(async (image) => {
    const path = join(cwd(), "public/images/planets", image);
    const placeholder = await generatePlaceholderForImage(path);

    return {
      image,
      placeholder,
    };
  });

  const placeholdersRaw = await Promise.all(promises);

  const placeholders = placeholdersRaw.reduce((acc, curr) => {
    acc[curr.image] = curr.placeholder;
    return acc;
  }, {});

  return placeholders;
}

/**
 *
 * @param {Record<string, string>} placeholders
 */
async function writePlaceholdersFile(placeholders) {
  let file =
    "// Generated file by `scripts/generatePlaceholder.mjs`, do not edit manually\n\n";

  file +=
    "export function getPlaceholderForImage(image: string): string | null {\n";
  file += "  return placeholders[image] ?? null;\n";
  file += "}\n\n";

  file += "const placeholders: Record<string, string | undefined> = {\n";

  for (const [key, value] of Object.entries(placeholders)) {
    file += `  "${key}": "${value}",\n`;
  }

  file += "};\n\n";
  file += "export default placeholders;";

  await writeFile(join(cwd(), "prisma/seed/placeholders.ts"), file);
}

async function main() {
  const placeholders = await generatePlaceholders();
  await writePlaceholdersFile(placeholders);
}

main();
