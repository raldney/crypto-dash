import Connection from "@/services/connection";

const wsApi = new Connection();

const init = () => {
  wsApi.subscribe();
};

const add = (channel) => {
  wsApi.subscribeOne(channel);
}
const close = () => wsApi.closeSubscription();

export { init, close, add };
