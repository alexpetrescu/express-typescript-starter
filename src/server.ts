import app from "./app";

const port = app.get("port");
const env = app.get("env");
const server = app.listen(port, () => {
	console.log(`Server running on port ${port}.`);
	console.log(`Environment: ${env}.`);
	console.log("Press Ctrl-C to close.");
});

export default server;
