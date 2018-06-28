// Service worker registration
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

import './assets/styles/style.css';
import Films from './js/controllers/Films'

document.addEventListener('DOMContentLoaded', () => {

    new Films();

})
