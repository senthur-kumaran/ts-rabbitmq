import express, { Application, Request, Response, NextFunction } from "express";
import { getBrokerConnection } from "./rabbitmq/broker";

// init message queue broker
let broker: any;

(async () => {
  broker = await getBrokerConnection();
})();

// Boot express
const app: Application = express();
const port = 3000;

// Application routing
app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const publication = await broker.publish("demo_pub", {"message":"Ping"});
  publication.on("error", console.error);
  res.status(200).send({ data: "Hello World" });
});

// 404
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("404 not found.");
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
