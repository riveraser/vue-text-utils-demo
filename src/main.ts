import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueTextUtils } from "@riveraser/vue-text-utils";

import App from "./App.vue";
import router from "./router";
import "./style.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueTextUtils, { defaultCurrency: "USD", locale: "es-SV" });
app.mount("#app");
