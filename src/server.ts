import { app } from "./app";
import * as dotenv from "dotenv";

dotenv.config()

const PORT = process.env.PORT;

const server = app.listen(PORT, () => console.log(`App Listen on http://localhost:${PORT}`));
process.on('SIGINT', () => {
    server.close();
    console.log('App closed');
});