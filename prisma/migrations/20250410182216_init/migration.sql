/*
  Warnings:

  - You are about to drop the column `maxStudants` on the `Cursos` table. All the data in the column will be lost.
  - Added the required column `maxStudents` to the `Cursos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cursos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "instrument" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "price" DECIMAL NOT NULL,
    "instructor" TEXT NOT NULL,
    "maxStudents" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Cursos" ("createdAt", "duration", "id", "instructor", "instrument", "level", "price", "title", "updatedAt") SELECT "createdAt", "duration", "id", "instructor", "instrument", "level", "price", "title", "updatedAt" FROM "Cursos";
DROP TABLE "Cursos";
ALTER TABLE "new_Cursos" RENAME TO "Cursos";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
