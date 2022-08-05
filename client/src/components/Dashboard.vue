<template>
  <div class="grid grid-cols-3 xl:grid-cols-4 gap-4 m-4">
    <div class="card-block" v-for="coin in watchlist" :key="coin.symbol">
      <CoinCard :coin="coin || {}" :info="coin"></CoinCard>
    </div>
  </div>
</template>
<script>
import { useCryptoStore } from "../stores/crypto";
import CoinCard from "@/components/CoinCard.vue";

import { mapState } from "pinia";

export default {
  name: "DashBoard",
  components: {
    CoinCard,
  },
  computed: {
    ...mapState(useCryptoStore, {
      watchlist: "watchlist",
    }),
  },
};
</script>
