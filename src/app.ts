import express from "express";

const app = express();

// App configuration
app.set("port", 3000);
app.set("env", "DEV");

// App routes
app.get("/", (req, res) => {
	res.send("Hello world!");
});

export default app;
