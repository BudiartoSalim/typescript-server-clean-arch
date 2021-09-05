import Server from "./server";
const PORT: number = Number(process.env.PORT) || 4000;
Server.start(PORT);