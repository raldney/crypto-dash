export default class Api {
  constructor() {
    this.subscription = null;
    this._baseUrl = "wss://streamer.cryptocompare.com/v2?api_key=";
  }

  subscribe(cb, api_key) {
    let ws;
    try {
      let path = this._baseUrl + api_key;
      if (this.subscription) {
        return this.subscription;
      }

      ws = new WebSocket(path);
      //Recebendo a mensagem da cryptoCompare e convertendo para o formato json, após a conversão enviando os dados para o método de callback que irá trabalhar com a informação
      ws.onmessage = (e) => cb(JSON.parse(e.data));
      ws.onclose = (e) => console.log("closed");

      this.subscription = ws;
    } catch (ex) {
      console.log("Error :" + ex);
    }
  }
  //Método para fazer inscrição na crypto desejada
  subscribeOne(value) {
    const subRequest = {
      action: "SubAdd",
      subs: [`2~Coinbase~${value}~USD`],
    };
    console.log(JSON.stringify(subRequest));
    this.subscription.send(JSON.stringify(subRequest));
  }
  //Método para remover a inscrição
  removeSubscription(value) {
    const subRequest = {
      action: "SubRemove",
      subs: [`2~Coinbase~${value}~USD`],
    };
    console.log(JSON.stringify(subRequest));
    this.subscription.send(JSON.stringify(subRequest));
  }

  //Método para encerrar a conexão com o WS
  closeSubscription() {
    if (this.subscription) {
      this.subscription.close(1000, "");
    }
  }
}
