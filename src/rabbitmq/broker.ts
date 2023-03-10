import { BrokerAsPromised } from 'rascal';
import config from '../config/rascal';

export const getBrokerConnection = async () => {
  try {
    const broker = await BrokerAsPromised.create(config);
    broker.on('error', console.error);
    return broker;
  } catch (error) {
    console.error(error);
  }
};
