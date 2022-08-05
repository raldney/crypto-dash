<script setup>
import DashBoard from "@/components/Dashboard.vue";
import Navbar from "@/components/Navbar.vue";
import { useCryptoStore } from "@/stores/crypto";
import { useAuthStore } from "@/stores/auth";

const cryptoStore = useCryptoStore();
const authStore = useAuthStore();

cryptoStore.loadCoinList(authStore.user.api); // inicializa a lista de cryptos
</script>

<template>
  <Navbar />

  <main class="w-full h-full">
    <DashBoard />
  </main>
</template>
