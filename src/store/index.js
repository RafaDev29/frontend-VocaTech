import { createStore } from "vuex";

const localStorageKey = 'app_user_data'; // Llave para el localStorage

export default createStore({
    state: {
        nombreApellidos: '',
        edad: '',
    },
    mutations: {
        setNombreApellidos(state, value) {
            state.nombreApellidos = value;
            localStorage.setItem(localStorageKey, JSON.stringify(state)); // Guardar en localStorage
        },
        setEdad(state, value) {
            state.edad = value;
            localStorage.setItem(localStorageKey, JSON.stringify(state)); // Guardar en localStorage
        },
        initializeStateFromLocalStorage(state) {
            const storedState = localStorage.getItem(localStorageKey);
            if (storedState) {
                Object.assign(state, JSON.parse(storedState)); // Asignar datos del localStorage al estado
            }
        },
        clearState(state) {
            state.nombreApellidos = '';
            state.edad = '';
            localStorage.removeItem(localStorageKey); // Borrar localStorage
        }
    },
    actions: {
        initializeStateFromLocalStorage({ commit }) {
            commit('initializeStateFromLocalStorage'); // Acción para inicializar
        },
        clearState({ commit }) {
            commit('clearState'); // Acción para limpiar el estado
        }
    }
});
