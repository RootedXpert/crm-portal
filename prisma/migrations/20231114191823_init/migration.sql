-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "user";

-- CreateTable
CREATE TABLE "user"."UserDetails" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "createdDate" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "modifieddate" TIMESTAMPTZ(6) NOT NULL,
    "manager_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "modified_by" TEXT NOT NULL,
    "dob" TIMESTAMP(6),
    "doj" TIMESTAMP(6),

    CONSTRAINT "UserDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user"."UserCredentials" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "corpid" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "UserCredentials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserCredentials_email_key" ON "user"."UserCredentials"("email");

-- AddForeignKey
ALTER TABLE "user"."UserDetails" ADD CONSTRAINT "UserDetails_manager_id_fkey" FOREIGN KEY ("manager_id") REFERENCES "user"."UserDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user"."UserDetails" ADD CONSTRAINT "UserDetails_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"."UserCredentials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user"."UserDetails" ADD CONSTRAINT "UserDetails_modified_by_fkey" FOREIGN KEY ("modified_by") REFERENCES "user"."UserCredentials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
