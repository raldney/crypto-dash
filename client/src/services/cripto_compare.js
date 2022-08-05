// Abstração dos metodos necessários para realizar a comunicação entre o APP e o WS da cryptocompare

import Connection from "@/services/connection";

const wsApi = new Connection();

const init = (cb, api_key) => {
  wsApi.subscribe(cb, api_key);
};

const add = (channel) => {
  wsApi.subscribeOne(channel);
};

const remove = (channel) => {
  wsApi.removeSubscription(channel);
};

const close = () => wsApi.closeSubscription();

export { init, close, add, remove };
