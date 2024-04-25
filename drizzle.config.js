export default {
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
};
