"use server";
import CreateClient from "@/lib/prismaClient";
const prisma = CreateClient();

export const authSign = async (formData: FormData) => {
  const formObject = Object.fromEntries(formData.entries());
  const email = formObject.email.toString();
  const password = formObject.password.toString();
  const result = await prisma.userCredentials.findFirst({
    where: {
      email,
      password,
    },
  });
  return result;
};
