import app from "./app";
import { AppVariable } from "./constants/app.constant";

const port = app.get(AppVariable.NODE_PORT);
const env = app.get(AppVariable.NODE_ENV);
const server = app.listen(port, () => {
	console.log(`Server running on port ${port}.`);
	console.log(`Environment: ${env}.`);
	console.log("Press Ctrl-C to close.");
});

export default server;
