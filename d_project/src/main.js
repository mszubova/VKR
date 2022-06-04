import { createApp } from 'vue' //Импорт метода для монтирования приложения
import App from './App.vue' //импорт содержимого app.vue
import mitt from 'mitt'; //импорт подключенной библиотеки событий
export const emitter = mitt(); //определение обработчика событий для приложения
const app = createApp(App); //создание приложения
app.config.globalProperties.emitter = emitter;
app.mount('#app'); //монтирование приложения