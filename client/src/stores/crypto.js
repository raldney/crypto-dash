import { defineStore } from "pinia";
import { add, init, remove } from "@/services/cripto_compare.js";
import "mosha-vue-toastify/dist/style.css";
import { createToast } from "mosha-vue-toastify";

export const useCryptoStore = defineStore({
  id: "crypto",
  state: () => ({
    coinlist: [],
    watchlist: {},
  }),
  actions: {
    async loadCoinList(api_key) {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/all/coinlist",
        {
          method: "GET",
        }
      );
      const coins = await response.json();

      this.coinlist = Object.values(coins.Data);
      this.coinlist.sort(function (a, b) {
        if (a.FullName < b.FullName) {
          return -1;
        }
        if (a.FullName > b.FullName) {
          return 1;
        }
        return 0;
      });
      //Inicializa o socket de comunicação junto a cryptocompare
      init(this.updateCoin, api_key);
    },
    addCoin(coin) {
      //Adiciona a crypto ao canal da CryptoCompare
      add(coin.Symbol);
      createToast("Crypto adicionada na WatchList", {
        type: "success",
      });
      this.watchlist[coin.Symbol] = {
        logo: "https://cryptocompare.com" + coin.ImageUrl,
        symbol: coin.Symbol,
        name: coin.FullName,
        price: 0,
        dayOpen: 0,
        variation: 0,
      };
    },
    removeCoin(coin) {
      delete this.watchlist[coin.symbol];
      remove(coin.symbol);
      createToast("Crypto removida da WatchList", {
        type: "danger",
      });
    },
    updateCoin(payload) {
      //Remover a crypto da watchlist caso ela não seja negociada pela coinbase
      if (payload.TYPE === "500") {
        let param = payload.PARAMETER.split("~");
        createToast("Crypto não negociada pela Coinbase", {
          type: "info",
        });
        delete this.watchlist[param[2]];
      }

      if (payload.TYPE === "2") {
        if (payload.PRICE !== undefined)
          this.watchlist[payload.FROMSYMBOL].price = payload.PRICE;
        if (payload.OPEN24HOUR !== undefined)
          this.watchlist[payload.FROMSYMBOL].dayOpen = payload.OPEN24HOUR;

        this.watchlist[payload.FROMSYMBOL].variation = (
          (this.watchlist[payload.FROMSYMBOL].price /
            this.watchlist[payload.FROMSYMBOL].dayOpen -
            1) *
          100
        ).toFixed(2);
      }

      //Associa os valores recebidos da cryptoCompare a variável local
    },
  },
});
