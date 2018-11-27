import List from './components/List.vue'
import ViewCharacter from './components/ViewCharacter'

/*
	array of all global routes of the proyect, in  here we asociated all the components with his routes.
*/
const routes = [
  { path: '/', component: List, name: 'list' },
  { path: '/show/:id', component: ViewCharacter, name: 'viewCharacter'}
]

export default routes
