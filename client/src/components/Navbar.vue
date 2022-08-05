<script>
import { useCryptoStore } from "../stores/crypto";
import { useAuthStore } from "../stores/auth";
import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {
      baseCurrency: {},
      select: null,
      showOptions: false,
      selectedCoins: [],
    };
  },
  methods: {
    ...mapActions(useCryptoStore, ["addCoin"]),
    ...mapActions(useAuthStore, ["logout"]),
    closeConnection() {
      close();
    },
    setInput(value) {
      this.selectedCoins.push(value);
      this.addCoin(value);
      this.showOptions = false;
    },
    resultQuery() {
      if (this.select) {
        //filtra o valor informado no input para exibir apenas as cryptos relacionadas
        return this.coinslist.filter((item) => {
          return this.select
            .toLowerCase()
            .split(" ")
            .every((v) => item.FullName.toLowerCase().includes(v));
        });
      } else {
        return [];
      }
    },
  },
  computed: {
    ...mapState(useCryptoStore, {
      coinslist: "coinlist",
    }),
  },
};
</script>
<template>
  <nav
    class="bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20 shadow-lg"
  >
    <!-- search bar -->
    <div class="sm:block justify-start px-2">
      <div
        class="mt-1 relative border border-gray-600 overflow-hidden rounded-md shadow-md"
      >
        <input
          @keyup="showOptions = true"
          v-model="select"
          class="w-full px-3 py-3"
          autocomplete="off"
          placeholder="Digite o nome da Crypto..."
        />
      </div>
      <div
        v-show="resultQuery().length && showOptions"
        class="absolute w-2/5 z-50 bg-white border border-gray-300 mt-1 max-height-48 overflow-hidden overflow-y-scroll rounded-md shadow-md"
      >
        <ul class="py-1">
          <li
            v-for="value in resultQuery()"
            @click="setInput(value)"
            class="px-3 py-2 cursor-pointer hover:bg-gray-200"
          >
            {{ value.FullName }}
          </li>
        </ul>
      </div>
    </div>
    <!-- end search bar -->

    <!-- login -->
    <div class="flex-initial">
      <div class="flex justify-end items-center relative">
        <div class="flex mr-4 items-center">
          <button
            type="button"
            class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full"
            href="#"
          >
            <div
              class="flex items-center relative cursor-pointer whitespace-nowrap"
            >
              Crypto Dashboard
            </div>
          </button>
          <div class="block relative">
            <button
              type="button"
              class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative"
            >
              <div class="flex items-center h-5" >
                <button type="button" @click="logout">
                  <img class="w-8 h-8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABX0lEQVRoge2aPU7DQBCFvyAUiQqJtFwE5RochjIN+blJTsAdKAwUdLQkEWUuABRZiyTgsA/H+K21TxrJxY71Pu3IuztegD4wA5bAh0ksgEnwFq2pgfGqGCsgi5B0pSQ1rCFfMxOtkt5Nkq+TBo38qzKImzKIm5xBbpTBp025OIJmwJmS4LqOSHIuLUmuIHPgDjhXkhxLq2Dj6R4BxhHkEnhh46sALmKSHEHgDzCuILAL88AvMM4gIMC4g8B3mMFPg1IAgQiYVEBgF+aRPZiUQOAATGogUAFTB6QHPG29o60o6u61esB7zXccTbm0WlLlZzglkINrSSognVgQo/Zb7iDR23lnEOlM4grSiYNVZ466z4jNB9dO4xuwAq6BdWyS44zIcm3QyXIHGSmDXUtrhOjLFST/1U1aGcRNnQJZhudhm0b2VHqRLtVMaL8vVRW3Ckg/wJTXnRziNUBEXzz7BOOAODtHOlVVAAAAAElFTkSuQmCC">
                </button>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- end login -->
  </nav>
</template>
