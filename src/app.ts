import express from "express";

const app = express();

// App configuration
app.set("port", process.env.NODE_PORT || 3000);
app.set("env", process.env.NODE_ENV || "DEV");

// App routes
app.get("/", (_req, res) => {
	res.send("Hello world!");
});

export default app;
