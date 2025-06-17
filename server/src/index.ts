// Import required modules and middleware
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
// Import route handlers for different API endpoints
import dashboardRoutes from "./routes/dashboardRoutes";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";
import expenseRoutes from "./routes/expenseRoutes";

// Load environment variables from .env file
dotenv.config();
// Create an Express application
const app = express();
// Parse incoming JSON requests
app.use(express.json());
// Add security-related HTTP headers
app.use(helmet());
// Set cross-origin resource policy for helmet
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// Log HTTP requests in the 'common' format
app.use(morgan("common"));
// Parse JSON and URL-encoded data in request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Enable Cross-Origin Resource Sharing for all routes
app.use(cors());

// Register API routes with their respective base paths
app.use("/dashboard", dashboardRoutes); // Handles dashboard-related endpoints
app.use("/products", productRoutes);   // Handles product-related endpoints
app.use("/users", userRoutes);         // Handles user-related endpoints
app.use("/expenses", expenseRoutes);   // Handles expense-related endpoints

// Start the server and listen on the specified port
const port = Number(process.env.PORT) || 3001;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
