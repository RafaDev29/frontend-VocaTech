import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store'; // Importar Vuex para verificar el estado

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            meta: {
                title: "Home"
            },
            path: "/",
            component: () => import("@/layouts/MasterLayout.vue"),
            children: [
                {
                    path: "welcome",
                    name: "welcome",
                    component: () => import("@/views/WelcomeView.vue")  // Vista de inicio
                },
                {
                    path: "test-vocacional",
                    name: "testVocacional",
                    component: () => import("@/views/testVocacionalView.vue")  // Nueva vista para el Test Vocacional
                },
                {
                    path: "recursos",
                    name: "recursos",
                    component: () => import("@/views/recursosView.vue")  // Nueva vista para Recursos
                },
                {
                    path: "resultados",
                    name: "resultados",
                    component: () => import("@/views/resultadosView.vue")  // Nueva vista para Resultados
                }
            ]
        },
        {
            meta: {
                title: "Login"
            },
            path: "/login",
            name: "login",
            component: () => import("@/views/LoginView.vue")  // Vista de Login
        },
        // Redirigir a login si la ruta no coincide
        {
            path: '/:pathMatch(.*)*',
            redirect: '/login'
        }
    ]
});

// Modificar el guard de navegación para prevenir el regreso al login si ya se ingresaron los datos
router.beforeEach((to, from, next) => {
    const nombreApellidos = store.state.nombreApellidos || localStorage.getItem('nombreApellidos');
    const edad = store.state.edad || localStorage.getItem('edad');

    if (to.name === 'login' && nombreApellidos && edad) {
        // Si el usuario intenta ir al login pero ya ingresó los datos, redirigirlo a la vista de bienvenida
        next({ name: 'welcome' });
    } else {
        next(); // Permitir todas las demás rutas
    }
});

export default router;
