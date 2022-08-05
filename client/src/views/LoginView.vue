<template>
  <!-- Container -->
  <main>
    <div
      class="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10"
    >
      <!-- Login component -->
      <div class="flex shadow-md">
        <!-- Login form -->
        <div
          class="flex flex-wrap content-center justify-center rounded-lg bg-white"
          style="width: 24rem; height: 32rem"
        >
          <div v-if="register" class="w-72">
            <!-- Heading -->
            <h1 class="text-xl font-semibold">Bem vindo!</h1>
            <small class="text-gray-400">
              Por favor, preencha as informações para realizar o cadastro.
            </small>

            <!-- Form -->
            <form class="mt-4">
              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Usuário</label>
                <input
                  v-model="user.username"
                  type="text"
                  placeholder="Digite usuário"
                  class="block w-full rounded-md border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-300 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Senha</label>
                <input
                  v-model="user.password"
                  type="password"
                  placeholder="*****"
                  class="block w-full rounded-md border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-300 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold"
                  >API KEY - CryptoCompare</label
                >
                <input
                  v-model="user.api"
                  type="text"
                  placeholder="Insira sua API KEY"
                  class="block w-full rounded-md border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-300 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div class="mb-3">
                <button
                  type="button"
                  @click="authStore.register(user)"
                  class="mb-1.5 block w-full text-center text-white bg-blue-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                >
                  Registrar
                </button>
              </div>
            </form>
          </div>
          <div v-if="!register" class="w-72">
            <!-- Heading -->
            <h1 class="text-xl font-semibold">Bem vindo!</h1>
            <small class="text-gray-400">
              Por favor, preencha as informações de login.
            </small>

            <!-- Form -->
            <form class="mt-4">
              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Usuário</label>
                <input
                  v-model="user.username"
                  type="text"
                  placeholder="Digite seu usuário"
                  class="block w-full rounded-md border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-300 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Senha</label>
                <input
                  v-model="user.password"
                  type="password"
                  placeholder="*****"
                  class="block w-full rounded-md border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-300 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div class="mb-3">
                <button
                  @click="authStore.login(user.username, user.password)"
                  class="mb-1.5 block w-full text-center text-white bg-blue-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                >
                  Acessar
                </button>
                <button
                  type="button"
                  @click="register = true"
                  class="mb-1.5 block w-full text-center text-white bg-blue-300 hover:bg-purple-500 px-2 py-1.5 rounded-md"
                >
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Login banner -->
        <div
          class="flex flex-wrap content-center justify-center rounded-r-md"
          style="width: 24rem; height: 32rem"
        >
          <img
            class="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
            src="@/assets/images/logo.jpg"
            alt="side"
          />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const register = ref(false);
const user = ref({ username: "", password: "", api: "" });
</script>
