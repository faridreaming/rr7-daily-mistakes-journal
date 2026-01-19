/*
  Warnings:

  - You are about to drop the `Journal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Journal";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "JournalEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "mistakes" TEXT NOT NULL,
    "triggers" TEXT NOT NULL,
    "impacts" TEXT NOT NULL,
    "futureImpacts" TEXT NOT NULL,
    "preventionSteps" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "JournalEntry_date_idx" ON "JournalEntry"("date");
