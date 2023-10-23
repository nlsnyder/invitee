import './index.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { fr } from '@formkit/i18n';
import { type DefaultConfigOptions, defaultConfig, plugin } from '@formkit/vue';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const config: DefaultConfigOptions = {
    locales: { fr },
    locale: 'fr',
};

library.add(faCircleExclamation);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(plugin, defaultConfig(config))
    .use(router)
    .mount('#app');
