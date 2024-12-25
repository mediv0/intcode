import "./assets/index.css";
import { createApp, h } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "fa",
  messages: {
    en: {
      validation: {
        username: "username",
        password: "password",
        phoneNumber: "phone number",
        email: "email",
      },
    },
    fa: {
      validation: {
        username: "یوزرنیم",
        password: "پسورد",
        phoneNumber: "شماره موبایل",
        email: "ایمیل",
      },
    },
  },
});

createApp({
  render: () => h(App),
})
  .use(i18n)
  .mount("#app");
