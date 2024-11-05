import {createStore} from 'vuex';

const store = createStore({
    state: {
        theme: false, // false - темная, true - светлая
    },

    getters: {
        
    },

    mutations: {
        changeTheme(state) {
            state.theme = !state.theme;
        },
    },

    actions: {
        
    },

});

export default store;