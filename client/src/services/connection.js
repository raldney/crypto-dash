export default class Api {
  constructor() {
    this.subscription = null;
    this._baseUrl =
      "wss://streamer.cryptocompare.com/v2?api_key=96acf8197f7653ad7807dd97e29b7e8739b8316ca90940cde19dcc726a42dcf2";
  }

  subscribe() {
    let ws;
    try {
      let path = this._baseUrl;
      if (this.subscription) {
        return this.subscription;
      }


      ws = new WebSocket(path);
      ws.onmessage = (e) => console.log(JSON.parse(e.data));
      ws.onclose = (e) => console.log('closed');
      this.subscription = ws;
    } catch (ex) {
      console.log("Error :" + ex);
    }
  }

  subscribeOne(value){
    const subRequest = {
      action: "SubAdd",
      subs: [`2~Coinbase~${value}~USD`],
    };
    console.log(JSON.stringify(subRequest));
    this.subscription.send(JSON.stringify(subRequest));
  }

  closeSubscription() {
    if (this.subscription) {
      this.subscription.close(1000, "");
    }
  }
}
