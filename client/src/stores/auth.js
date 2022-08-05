import { defineStore } from "pinia";
import router from "@/router";
import { createToast } from "mosha-vue-toastify";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: null,
  }),
  actions: {
    register(user) {
      if(!user.api_key){
        createToast("Erro ao realizar o cadastro, por favor informa uma API_KEY!", {
          type: "danger",
        });
      }else{
        localStorage.setItem("user", JSON.stringify(user));
        this.user = user;
        createToast(
            "Muito obrigado por realizar seu cadastro! " + user.username,
            {
              type: "success",
            }
        );
        router.push("/");
      }

    },
    login(username, password) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        if (user.password === password && user.username === username) {
          this.user = user;
        } else {
          createToast("Erro ao realizar o login!", {
            type: "danger",
          });
        }
        router.push("/");
      } else {
        createToast("Por favor, realize seu registro!", {
          type: "info",
        });
      }
    },
    logout() {
      this.user = null;
      router.push("/login");
    },
  },
});
