/*
  Warnings:

  - Added the required column `order` to the `DetectionMethod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `PlanetType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `DetectionMethod` ADD COLUMN `order` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `PlanetType` ADD COLUMN `order` INTEGER NOT NULL;
