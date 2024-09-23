import { createStore } from "vuex";

const localStorageKey = 'DJsdfg-2352LLDSF-dfglñdskfgiu38r_[22334ews34>YUVASZghsvdV';

export default createStore({
    state: {
        isAuthenticated: false,
        role: '',
        username: '',
        token: '',
        nombreApellidos: '',  // Añadido
        edad: ''  // Añadido
    },
    getters: {

    },
    mutations: {
        setIsAuthenticated(state, value) {
            state.isAuthenticated = value;
            localStorage.setItem(localStorageKey, JSON.stringify(state));
        },
        setUsername(state, value) {
            state.username = value;
            localStorage.setItem(localStorageKey, JSON.stringify(state));
        },
        setToken(state, value) {
            state.token = value;
            localStorage.setItem(localStorageKey, JSON.stringify(state));
        },
        setRole(state, value) {
            state.role = value;
            localStorage.setItem(localStorageKey, JSON.stringify(state));
        },
        setNombreApellidos(state, value) {  // Nueva mutación
            state.nombreApellidos = value;
            localStorage.setItem(localStorageKey, JSON.stringify(state));
        },
        setEdad(state, value) {  // Nueva mutación
            state.edad = value;
            localStorage.setItem(localStorageKey, JSON.stringify(state));
        },
        initializeStateFromLocalStorage(state) {
            const storedState = localStorage.getItem(localStorageKey);
            if (storedState) {
                Object.assign(state, JSON.parse(storedState));
            }
        }
    },
    actions: {
        initializeStateFromLocalStorage({ commit }) {
            commit('initializeStateFromLocalStorage');
        }
    }
})
