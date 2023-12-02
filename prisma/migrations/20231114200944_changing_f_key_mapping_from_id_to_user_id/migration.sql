/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `UserCredentials` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `UserDetails` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "user"."UserDetails" DROP CONSTRAINT "UserDetails_manager_id_fkey";

-- DropForeignKey
ALTER TABLE "user"."UserDetails" DROP CONSTRAINT "UserDetails_modified_by_fkey";

-- DropForeignKey
ALTER TABLE "user"."UserDetails" DROP CONSTRAINT "UserDetails_user_id_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "UserCredentials_user_id_key" ON "user"."UserCredentials"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "UserDetails_user_id_key" ON "user"."UserDetails"("user_id");

-- AddForeignKey
ALTER TABLE "user"."UserDetails" ADD CONSTRAINT "UserDetails_manager_id_fkey" FOREIGN KEY ("manager_id") REFERENCES "user"."UserDetails"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user"."UserDetails" ADD CONSTRAINT "UserDetails_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"."UserCredentials"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user"."UserDetails" ADD CONSTRAINT "UserDetails_modified_by_fkey" FOREIGN KEY ("modified_by") REFERENCES "user"."UserCredentials"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
