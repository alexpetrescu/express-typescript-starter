import express from "express";
import { AppVariable, AppDefault } from "./constants/app.constant";

const app = express();

// App configuration
app.set(
	AppVariable.NODE_PORT,
	process.env[AppVariable.NODE_PORT] || AppDefault.NODE_PORT
);
app.set(
	AppVariable.NODE_ENV,
	process.env[AppVariable.NODE_ENV] || AppDefault.NODE_ENV
);

// App routes
app.get("/", (_req, res) => {
	res.send("Hello world!");
});

export default app;
