import { createRouter, createWebHistory } from 'vue-router';
//import store from '@/store';

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
                    component: () => import("@/views/WelcomeView.vue")  // Nueva vista
                }
            ]
        },
        {
            meta: {
                title: "Login"
            },
            path: "/login",
            name: "login",
            component: () => import("@/views/LoginView.vue")
        },
        // Redirigir a login si la ruta no coincide
        {
            path: '/:pathMatch(.*)*',
            redirect: '/login'
        }
    ]
});

// No necesitamos validaciones de autenticación, solo redirigimos si es necesario
router.beforeEach((to, from, next) => {
    next(); // Permitir todas las rutas sin restricciones
});

export default router;
