import CreateClient from "../lib/prismaClient";

const prisma = CreateClient();

const main = async () => {
  await prisma.userCredentials.create({
    data: {
      corpid: "SV01",
      email: "me@rootedxpert.dev",
      password: "Summer@2022",
      user_id: "41391e12-2aa3-4b67-a891-8499c05f819b",
    },
  });
  await prisma.userDetails.create({
    data: {
      name: "Srikanth Varma",
      user_id: "41391e12-2aa3-4b67-a891-8499c05f819b",
      number: 8008555504,
      is_active: true,
      modified_date: new Date(),
    },
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  });
