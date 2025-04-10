/*
  Warnings:

  - You are about to drop the `tasks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "tasks";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Class" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "instrument" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "price" DECIMAL NOT NULL,
    "instructor" TEXT NOT NULL,
    "maxStudants" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
