import {createApp} from "vue"
import App from './App.vue'

createApp(App).mount('#app')

// Challenge - Add to Favs
//   - attach a click event to each li tag (for each book)
//   - when a user clicks an li, toggle the 'isFav' property of that book