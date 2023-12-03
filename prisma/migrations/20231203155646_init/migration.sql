-- CreateTable
CREATE TABLE `PlanetType` (
    `id` ENUM('GasGiant', 'Terrestrial', 'SuperEarth', 'Neptunian') NOT NULL,
    `displayName` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `slug` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PlanetType_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Planet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `imagePlaceholder` VARCHAR(255) NULL,
    `source` TEXT NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `typeId` ENUM('GasGiant', 'Terrestrial', 'SuperEarth', 'Neptunian') NOT NULL,
    `methodId` ENUM('Transit', 'RadialVelocity', 'Imaging', 'OrbitalBrightnessModulation', 'PulsarTiming') NOT NULL,

    UNIQUE INDEX `Planet_slug_key`(`slug`),
    INDEX `Planet_typeId_idx`(`typeId`),
    INDEX `Planet_methodId_idx`(`methodId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Unit` (
    `id` ENUM('LightYears', 'EarthMasses', 'EarthRadii', 'JupiterMasses', 'JupiterRadii', 'Year') NOT NULL,
    `displayName` VARCHAR(191) NOT NULL,
    `suffix` VARCHAR(191) NULL,
    `explanation` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AttributeType` (
    `id` ENUM('Discovery', 'Mass', 'Radius', 'Distance') NOT NULL,
    `displayName` VARCHAR(191) NOT NULL,
    `explanation` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attribute` (
    `value` VARCHAR(191) NOT NULL,
    `typeId` ENUM('Discovery', 'Mass', 'Radius', 'Distance') NOT NULL,
    `unitId` ENUM('LightYears', 'EarthMasses', 'EarthRadii', 'JupiterMasses', 'JupiterRadii', 'Year') NOT NULL,
    `planetId` INTEGER NOT NULL,

    INDEX `Attribute_planetId_idx`(`planetId`),
    INDEX `Attribute_typeId_idx`(`typeId`),
    INDEX `Attribute_unitId_idx`(`unitId`),
    PRIMARY KEY (`planetId`, `typeId`, `unitId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetectionMethod` (
    `id` ENUM('Transit', 'RadialVelocity', 'Imaging', 'OrbitalBrightnessModulation', 'PulsarTiming') NOT NULL,
    `displayName` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `slug` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `DetectionMethod_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
