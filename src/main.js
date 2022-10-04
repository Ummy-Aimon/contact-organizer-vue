import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router';



/*
FontAwesome
*/

import "../node_modules/@fortawesome/fontawesome-free/css/all.css"


/*
    Bootstrap Styles
 */
    import "../node_modules/bootstrap/dist/css/bootstrap.css";
    import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
    import "./components/style.css"; 
    // import "../node_modules/router/dist/router.js";
  

createApp(App).mount('#app').use(router)
