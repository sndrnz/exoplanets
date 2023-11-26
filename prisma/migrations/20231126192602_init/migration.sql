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
    "imagePlaceholder" TEXT,
    "discovered" INTEGER NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,
    "source" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "Planet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PlanetType_slug_key" ON "PlanetType"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Planet_slug_key" ON "Planet"("slug");

-- AddForeignKey
ALTER TABLE "Planet" ADD CONSTRAINT "Planet_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "PlanetType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
