import { createStore} from 'vuex'

import Entity from './modules/Entity.js'

const store = createStore({
    modules:{
        Entity,
    }
})

export default store;