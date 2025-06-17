// Redux Toolkit Query API for fetching and mutating data
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Interface for a product
export interface Product {
  // Unique product ID
  productId: string;
  // Product name
  name: string;
  // Product price
  price: number;
  // Optional product rating
  rating?: number;
  // Quantity in stock
  stockQuantity: number;
}

// Interface for creating a new product
export interface NewProduct {
  // Product name
  name: string;
  // Product price
  price: number;
  // Optional product rating
  rating?: number;
  // Quantity in stock
  stockQuantity: number;
}

// Interface for sales summary
export interface SalesSummary {
  // Unique sales summary ID
  salesSummaryId: string;
  // Total sales value
  totalValue: number;
  // Optional percentage change in sales
  changePercentage?: number;
  // Date of the sales summary
  date: string;
}

// Interface for purchase summary
export interface PurchaseSummary {
  // Unique purchase summary ID
  purchaseSummaryId: string;
  // Total purchased value
  totalPurchased: number;
  // Optional percentage change in purchases
  changePercentage?: number;
  // Date of the purchase summary
  date: string;
}

// Interface for expense summary
export interface ExpenseSummary {
  // Unique expense summary ID
  expenseSummarId: string;
  // Total expenses
  totalExpenses: number;
  // Date of the expense summary
  date: string;
}

// Interface for expense by category summary
export interface ExpenseByCategorySummary {
  // Unique expense by category summary ID
  expenseByCategorySummaryId: string;
  // Expense category
  category: string;
  // Amount spent in the category
  amount: string;
  // Date of the expense summary
  date: string;
}

// Interface for dashboard metrics
export interface DashboardMetrics {
  // List of popular products
  popularProducts: Product[];
  // List of sales summaries
  salesSummary: SalesSummary[];
  // List of purchase summaries
  purchaseSummary: PurchaseSummary[];
  // List of expense summaries
  expenseSummary: ExpenseSummary[];
  // List of expense summaries by category
  expenseByCategorySummary: ExpenseByCategorySummary[];
}

// Interface for a user
export interface User {
  // Unique user ID
  userId: string;
  // User name
  name: string;
  // User email
  email: string;
}

// Create the API slice
export const api = createApi({
  // Configure base query with API base URL
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["DashboardMetrics", "Products", "Users", "Expenses"],
  endpoints: (build) => ({
    // Fetch dashboard metrics
    getDashboardMetrics: build.query<DashboardMetrics, void>({
      query: () => "/dashboard",
      providesTags: ["DashboardMetrics"],
    }),
    // Fetch products (optionally by search)
    getProducts: build.query<Product[], string | void>({
      query: (search) => ({
        url: "/products",
        params: search ? { search } : {},
      }),
      providesTags: ["Products"],
    }),
    // Create a new product
    createProduct: build.mutation<Product, NewProduct>({
      query: (newProduct) => ({
        url: "/products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Products"],
    }),
    // Fetch users
    getUsers: build.query<User[], void>({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    // Fetch expenses by category
    getExpensesByCategory: build.query<ExpenseByCategorySummary[], void>({
      query: () => "/expenses",
      providesTags: ["Expenses"],
    }),
  }),
});

// Export hooks for the API endpoints
export const {
  useGetDashboardMetricsQuery,
  useGetProductsQuery,
  useCreateProductMutation,
  useGetUsersQuery,
  useGetExpensesByCategoryQuery,
} = api;
