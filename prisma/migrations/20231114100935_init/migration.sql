-- CreateTable
CREATE TABLE "PlanetType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "PlanetType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planet" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "discovered" INTEGER NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,
    "source" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "Planet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Planet" ADD CONSTRAINT "Planet_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "PlanetType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
