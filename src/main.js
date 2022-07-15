import { createApp } from 'vue';
import App from './App.vue';

/**
 * Fontawesome
 */
import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faPlay,
    faStop, 
    faStar, 
    faCircle,
    faSquare,
    faCamera,
    faImage,
    faEye, 
    faGem,
    faPen,
    faCube,
    faFish,
    faAppleWhole,
    faBook,
    faBiohazard,
    faDna,
    faInfinity,
    faShuttleSpace
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add({
    faPlay,
    faStop, 
    faStar, 
    faCircle,
    faSquare,
    faCamera,
    faImage,
    faEye, 
    faGem,
    faPen,
    faCube,
    faFish,
    faAppleWhole,
    faBook,
    faBiohazard,
    faDna,
    faInfinity,
    faShuttleSpace
});

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
