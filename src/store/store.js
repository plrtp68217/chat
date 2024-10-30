import {createStore} from 'vuex';

const store = createStore({
    state: {
        dark_theme: false,
    },

    getters: {
        
    },

    mutations: {
        changeTheme(state) {
            state.dark_theme = !state.dark_theme;
        },
    },

    actions: {
        
    },

});

export default store;