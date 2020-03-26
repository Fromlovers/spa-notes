import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';
import './sass/index.scss';
import router from './router/index';
import storeData from './store/index';
import installGlobalComponents from './globalExtension';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faTimes, faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faTrashAlt, faTimes, faPencilAlt, faPlus);

installGlobalComponents.call(Vue);

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store(storeData);

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});

export default app;
