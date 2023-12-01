-- CreateEnum
CREATE TYPE "PlanetTypeName" AS ENUM ('GasGiant', 'Terrestrial', 'SuperEarth', 'Neptunian');

-- CreateEnum
CREATE TYPE "UnitName" AS ENUM ('LightYears', 'EarthMasses', 'EarthRadii', 'JupiterMasses', 'JupiterRadii', 'Year');

-- CreateEnum
CREATE TYPE "AttributeName" AS ENUM ('Discovery', 'Mass', 'Radius', 'Distance');

-- CreateTable
CREATE TABLE "PlanetType" (
    "id" "PlanetTypeName" NOT NULL,
    "displayName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "PlanetType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planet" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "imagePlaceholder" TEXT,
    "source" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "typeId" "PlanetTypeName" NOT NULL,

    CONSTRAINT "Planet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unit" (
    "id" "UnitName" NOT NULL,
    "displayName" TEXT NOT NULL,
    "suffix" TEXT,
    "explanation" TEXT,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttributeType" (
    "id" "AttributeName" NOT NULL,
    "displayName" TEXT NOT NULL,
    "explanation" TEXT,

    CONSTRAINT "AttributeType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attribute" (
    "value" TEXT NOT NULL,
    "typeId" "AttributeName" NOT NULL,
    "unitId" "UnitName" NOT NULL,
    "planetId" INTEGER NOT NULL,

    CONSTRAINT "Attribute_pkey" PRIMARY KEY ("planetId","typeId","unitId")
);

-- CreateIndex
CREATE UNIQUE INDEX "PlanetType_slug_key" ON "PlanetType"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Planet_slug_key" ON "Planet"("slug");

-- AddForeignKey
ALTER TABLE "Planet" ADD CONSTRAINT "Planet_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "PlanetType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attribute" ADD CONSTRAINT "Attribute_planetId_fkey" FOREIGN KEY ("planetId") REFERENCES "Planet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attribute" ADD CONSTRAINT "Attribute_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "AttributeType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attribute" ADD CONSTRAINT "Attribute_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
