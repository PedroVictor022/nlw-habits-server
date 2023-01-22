import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const firstHabitId = "123019-asd9csde-9asd323un-nss78734";
const firstHabitCreationDate = new Date("2022-12-31T03:00:00.000");

const secondHabitId = "12slkfm9-lk45lk6-0df09v3v4-nss78734";
const secondHabitCreationDate = new Date("2022-03-31T03:00:00.000");

const thirdHabitId = "234234-23498wef98-9asd323un-nss78734";
const thirdHabitCreationDate = new Date("2023-01-24T06:00:00.000");

async function main() {
  await prisma.habit.deleteMany();
  await prisma.day.deleteMany();

  await Promise.all([
    prisma.habit.create({
      data: {
        id: firstHabitId,
        title: "Fazer cafe",
        created_at: firstHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
          ]
        }
      },
    }),

    prisma.habit.create({
      data: {
        id: secondHabitId,
        title: "Beber agua",
        created_at: secondHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 3},
            { week_day: 4 },
            { week_day: 5 },
          ]
        }
      },
    }),
  ]);


    prisma.habit.create({
      data: {
        id: thirdHabitId,
        title: "Treino",
        created_at: thirdHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
          ]
        }
      },
    }),


  await prisma.habit.create({
    data: {
      title: "Beber 2L de agua",
      created_at: new Date("2023-01-21T00:00:00.000z"),
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
