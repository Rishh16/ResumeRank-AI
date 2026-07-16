-- DropForeignKey
ALTER TABLE "ResumeAnalysis" DROP CONSTRAINT "ResumeAnalysis_userId_fkey";

-- AddForeignKey
ALTER TABLE "ResumeAnalysis" ADD CONSTRAINT "ResumeAnalysis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
