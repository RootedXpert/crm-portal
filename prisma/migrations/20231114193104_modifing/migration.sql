/*
  Warnings:

  - You are about to drop the column `createdDate` on the `UserDetails` table. All the data in the column will be lost.
  - You are about to drop the column `modifieddate` on the `UserDetails` table. All the data in the column will be lost.
  - Added the required column `modified_date` to the `UserDetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user"."UserDetails" DROP CONSTRAINT "UserDetails_manager_id_fkey";

-- DropForeignKey
ALTER TABLE "user"."UserDetails" DROP CONSTRAINT "UserDetails_modified_by_fkey";

-- AlterTable
ALTER TABLE "user"."UserDetails" DROP COLUMN "createdDate",
DROP COLUMN "modifieddate",
ADD COLUMN     "created_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "modified_date" TIMESTAMPTZ(6) NOT NULL,
ALTER COLUMN "manager_id" DROP NOT NULL,
ALTER COLUMN "modified_by" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "user"."UserDetails" ADD CONSTRAINT "UserDetails_manager_id_fkey" FOREIGN KEY ("manager_id") REFERENCES "user"."UserDetails"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user"."UserDetails" ADD CONSTRAINT "UserDetails_modified_by_fkey" FOREIGN KEY ("modified_by") REFERENCES "user"."UserCredentials"("id") ON DELETE SET NULL ON UPDATE CASCADE;
