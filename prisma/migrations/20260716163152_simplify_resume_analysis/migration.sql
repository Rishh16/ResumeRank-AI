/*
  Warnings:

  - You are about to drop the column `userId` on the `ResumeAnalysis` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ResumeAnalysis" DROP CONSTRAINT "ResumeAnalysis_userId_fkey";

-- AlterTable
ALTER TABLE "ResumeAnalysis" DROP COLUMN "userId";
