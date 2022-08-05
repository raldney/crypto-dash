<script setup>
import { useCryptoStore } from "../stores/crypto";
const cryptoStore = useCryptoStore();

defineProps({
  coin: {},
});
</script>
<template>
  <div class="bg-white p-6 shadow rounded-lg">
    <div class="flex items-center border-b border-gray-200 pb-6">
      <img :src="coin.logo" alt="coin avatar" class="w-12 h-12 rounded-full" />
      <div class="flex items-start justify-between w-full">
        <div class="pl-3 w-full">
          <p
            class="focus:outline-none text-xl font-medium leading-5 text-gray-800"
          >
            {{ coin.name }}
          </p>
          <p class="text-sm leading-normal text-gray-500 flex flex-row mt-2">
            <span class="mr-1" v-if="coin.variation > 0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#14B8A6"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </span>
            <span class="mr-1" v-if="coin.variation < 0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#EF4444"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                />
              </svg>
            </span>
            <span class="text-teal-500 font-bold mr-2"
              >{{ coin.variation }}%</span
            >
            em 24 horas
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-between p-2">
      <p
        class="focus:outline-none text-sm leading-5 py-2 text-gray-600 text-2xl"
      >
        U$ {{ coin.price }}
      </p>
      <button
        class="bg-red-500 p-2 text-white text-sm rounded-md shadow"
        @click="cryptoStore.removeCoin(coin)"
      >
        Remover
      </button>
    </div>
  </div>
</template>
