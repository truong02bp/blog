import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import { task } from './store/task'

const store = createStore({
    modules: {
        task
    }
});
createApp(App).use(store).mount('#app')
