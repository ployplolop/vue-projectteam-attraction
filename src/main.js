import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import contact from './views/contact.vue';
import login from './views/login.vue';
import VideoGallery from './components/VideoGallery.vue';
import north from './views/North.vue';
import south from './views/South.vue';

import "bootstrap/dist/css/bootstrap.css" ;  // bootstrap 5 css
import "bootstrap/dist/js/bootstrap.bundle.js" ;  // bootstrap 5 css

createApp(App).use(store).use(router).use(contact).use(login).use(VideoGallery)
.use(north).use(south).mount('#app')
