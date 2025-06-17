CREATE TABLE "Products"(
    "productId" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" DECIMAL(10, 2) NOT NULL,
    "rating" DECIMAL(2, 1) NULL,
    "stockQuantity" INTEGER NOT NULL
);
ALTER TABLE
    "Products" ADD PRIMARY KEY("productId");
CREATE TABLE "Sales"(
    "saleId" VARCHAR(255) NOT NULL,
    "productId" VARCHAR(255) NULL,
    "timestamp" DATE NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DECIMAL(10, 2) NOT NULL,
    "totalAmount" DECIMAL(10, 2) NOT NULL
);
ALTER TABLE
    "Sales" ADD PRIMARY KEY("saleId");
CREATE TABLE "Purchases"(
    "purchaseId" VARCHAR(255) NOT NULL,
    "productId" VARCHAR(255) NULL,
    "timestamp" DATE NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitCost" DECIMAL(10, 2) NOT NULL,
    "totalCost" DECIMAL(10, 2) NOT NULL
);
ALTER TABLE
    "Purchases" ADD PRIMARY KEY("purchaseId");
CREATE TABLE "Expenses"(
    "expenseId" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255) CHECK
        ("category" IN('')) NOT NULL,
        "amount" DECIMAL(10, 2) NOT NULL,
        "timestamp" DATE NOT NULL
);
ALTER TABLE
    "Expenses" ADD PRIMARY KEY("expenseId");
CREATE TABLE "Users"(
    "userId" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "Users" ADD PRIMARY KEY("userId");
CREATE TABLE "SalesSummary"(
    "salesSummaryId" VARCHAR(255) NOT NULL,
    "totalValue" DECIMAL(10, 2) NOT NULL,
    "changePercentage" DECIMAL(5, 2) NOT NULL,
    "date" DATE NOT NULL
);
ALTER TABLE
    "SalesSummary" ADD PRIMARY KEY("salesSummaryId");
CREATE TABLE "PurchaseSummary"(
    "purchaseSummaryId" VARCHAR(255) NOT NULL,
    "totalPurchased" DECIMAL(10, 2) NOT NULL,
    "changePercentage" DECIMAL(5, 2) NOT NULL,
    "date" DATE NOT NULL
);
ALTER TABLE
    "PurchaseSummary" ADD PRIMARY KEY("purchaseSummaryId");
CREATE TABLE "ExpenseSummary"(
    "expenseSummaryId" VARCHAR(255) NOT NULL,
    "totalExpenses" DECIMAL(10, 2) NOT NULL,
    "date" DATE NOT NULL
);
ALTER TABLE
    "ExpenseSummary" ADD PRIMARY KEY("expenseSummaryId");
CREATE TABLE "ExpenseByCategory"(
    "expenseByCategoryId" VARCHAR(255) NOT NULL,
    "expenseSummaryId" VARCHAR(255) NOT NULL,
    "date" DATE NOT NULL,
    "category" BIGINT NOT NULL,
    "amount" BIGINT NOT NULL
);
ALTER TABLE
    "ExpenseByCategory" ADD PRIMARY KEY("expenseByCategoryId");
ALTER TABLE
    "Purchases" ADD CONSTRAINT "purchases_productid_foreign" FOREIGN KEY("productId") REFERENCES "Products"("productId");
ALTER TABLE
    "ExpenseByCategory" ADD CONSTRAINT "expensebycategory_expensesummaryid_foreign" FOREIGN KEY("expenseSummaryId") REFERENCES "ExpenseSummary"("expenseSummaryId");
ALTER TABLE
    "Sales" ADD CONSTRAINT "sales_productid_foreign" FOREIGN KEY("productId") REFERENCES "Products"("productId");