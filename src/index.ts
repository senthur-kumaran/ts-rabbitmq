import express, { Application, Request, Response } from 'express';

import { getBrokerConnection } from './rabbitmq/broker';
import { BrokerAsPromised } from 'rascal';

// init message queue broker
let broker: BrokerAsPromised | undefined;

(async () => {
  broker = await getBrokerConnection();
})();

// Boot express
const app: Application = express();
const port = 3000;

// Application routing
app.get('/', async (req: Request, res: Response) => {
  if (!(broker instanceof BrokerAsPromised)) {
    res.status(400).send('Bad request');
    return;
  }
  const publication = await broker.publish('demo_pub', { message: 'Ping' });
  publication.on('error', console.error);
  res.status(200).send({ data: 'Hello World' });
});

// 404
app.use((req: Request, res: Response) => {
  res.status(404).send('404 not found.');
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
