<template>
    <div>
      <!-- Barra de menú superior -->
      <header class="bg-white shadow-md py-4 px-6">
        <div class="flex justify-between items-center">
          <!-- Saludo y nombre de usuario -->
          <div class="flex items-center space-x-2">
            <span class="text-gray-700 font-medium">Hola</span>
            <span class="text-blue-600 font-bold">{{ username }}</span>
          </div>
  
          <!-- Opciones de navegación -->
          <nav class="flex space-x-8">
            <router-link to="/welcome" class="text-gray-800 font-bold hover:text-blue-600 transition">Inicio</router-link>
            <router-link to="/test-vocacional" class="text-gray-800 hover:text-blue-600 transition">Test Vocacional</router-link>
            <router-link to="/recursos" class="text-gray-800 hover:text-blue-600 transition">Recursos</router-link>
            <router-link to="/resultados" class="text-gray-800 hover:text-blue-600 transition">Resultados</router-link>
          </nav>
  
          <!-- Botón de salir -->
          <div class="flex items-center space-x-2">
            <button @click="logout" class="text-gray-800 font-bold hover:text-blue-600 transition">
              Salir
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800 hover:text-blue-600 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-14v1m0 8l0-8"/>
            </svg>
          </div>
        </div>
      </header>
  
      <!-- Contenido principal -->
      <main class="py-10 px-6">
        <router-view />
      </main>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'; // Importar router para redirigir
  import store from '@/store';
  
  export default {
    setup() {
      const username = ref(store.state.nombreApellidos || "Usuario"); // Obtener el nombre de usuario
      const router = useRouter(); // Inicializar router para redirigir
  
      const logout = () => {
        // Limpiar localStorage y redirigir al login
        localStorage.clear();  // Limpiar el almacenamiento local
        router.push('/login'); // Redirigir a la página de login
      };
  
      return {
        username,
        logout
      };
    },
  };
  </script>
  
  <style scoped>
  /* Puedes agregar más estilos personalizados aquí si lo necesitas */
  </style>
  