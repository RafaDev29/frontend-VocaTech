import { createRouter, createWebHistory } from 'vue-router';

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
                    component: () => import("@/views/welcomeView.vue")  // Vista de inicio
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

// Permitir todas las rutas sin validación de autenticación
router.beforeEach((to, from, next) => {
    next(); // Permitir todas las rutas
});

export default router;
