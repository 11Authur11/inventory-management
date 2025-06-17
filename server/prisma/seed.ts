// This script seeds the database using Prisma ORM and JSON files for initial data.
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
// Instantiate Prisma client
const prisma = new PrismaClient();

// Deletes all data from the database tables in the order provided
async function deleteAllData(orderedFileNames: string[]) {
  // Map file names to model names (capitalize first letter, remove extension)
  const modelNames = orderedFileNames.map((fileName) => {
    const modelName = path.basename(fileName, path.extname(fileName));
    return modelName.charAt(0).toUpperCase() + modelName.slice(1);
  });

  // Loop through each model and delete all records
  for (const modelName of modelNames) {
    const model: any = prisma[modelName as keyof typeof prisma];
    if (model) {
      await model.deleteMany({});
      console.log(`Cleared data from ${modelName}`);
    } else {
      // Warn if the model does not exist in Prisma client
      console.error(
        `Model ${modelName} not found. Please ensure the model name is correctly specified.`
      );
    }
  }
}

// Main function to seed the database
async function main() {
  // Path to the directory containing seed data JSON files
  const dataDirectory = path.join(__dirname, "seedData");

  // List of JSON files to seed, in order (order matters for foreign key constraints)
  const orderedFileNames = [
    "products.json",
    "expenseSummary.json",
    "sales.json",
    "salesSummary.json",
    "purchases.json",
    "purchaseSummary.json",
    "users.json",
    "expenses.json",
    "expenseByCategory.json",
  ];

  // First, clear all data from the tables
  await deleteAllData(orderedFileNames);

  // Loop through each file and insert its data into the corresponding table
  for (const fileName of orderedFileNames) {
    const filePath = path.join(dataDirectory, fileName);
    // Read and parse the JSON data
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    // Get the model name from the file name
    const modelName = path.basename(fileName, path.extname(fileName));
    const model: any = prisma[modelName as keyof typeof prisma];

    if (!model) {
      // Warn if the model does not exist
      console.error(`No Prisma model matches the file name: ${fileName}`);
      continue;
    }

    // Insert each record from the JSON file into the database
    for (const data of jsonData) {
      await model.create({
        data,
      });
    }

    console.log(`Seeded ${modelName} with data from ${fileName}`);
  }
}

// Run the main function and handle errors/cleanup
main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
