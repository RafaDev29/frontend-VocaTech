<template>
  <div class="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4 overflow-hidden">
    <!-- Fondo inspirado en article.js -->
    <div class="absolute inset-0 z-0">
      <div class="w-full h-full flex items-center justify-center opacity-40">
        <div class="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div class="absolute top-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse animation-delay-4000"></div>
        <div class="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>
    </div>

    <!-- Contenedor del formulario -->
    <div class="relative z-10 bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 sm:p-10 max-w-lg w-full transform hover:scale-105 transition duration-500">
      <!-- Icono y Título -->
      <div class="text-center mb-6">
        <i class="mdi mdi-emoticon-happy-outline text-7xl text-indigo-500"></i>
        <h1 class="text-4xl font-extrabold text-gray-800 mt-4">¡Bienvenido!</h1>
      </div>

      <!-- Texto motivacional -->
      <p class="text-gray-600 mb-8 text-lg">
        Explora tus habilidades y encuentra tu vocación.
        <br />
        <span class="text-indigo-500 font-semibold">La elección correcta para un futuro exitoso está a un clic de distancia.</span>
      </p>

      <!-- Campo para nombre y apellidos -->
      <div class="mb-5">
        <label class="block text-gray-700 font-semibold mb-2" for="nombre-apellidos">Nombre y Apellidos</label>
        <input
          type="text"
          id="nombre-apellidos"
          v-model="nombreApellidos"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-sm"
          placeholder="Ej. Juan Pérez"
        />
      </div>

      <!-- Campo para edad -->
      <div class="mb-8">
        <label class="block text-gray-700 font-semibold mb-2" for="edad">Edad</label>
        <input
          type="number"
          id="edad"
          v-model="edad"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-sm"
          placeholder="Ej. 25"
        />
      </div>

      <!-- Botón de empezar -->
      <div class="flex justify-center">
        <button
          @click="empezar"
          class="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:translate-y-1 shadow-lg"
        >
          Empezar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Swal from 'sweetalert2'; // Importa SweetAlert2

export default {
  setup() {
    const nombreApellidos = ref('');
    const edad = ref('');

    const empezar = () => {
      if (!nombreApellidos.value) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, ingrese su nombre y apellidos.',
        });
        return;
      }

      if (!edad.value) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, ingrese su edad.',
        });
        return;
      }

      // Mensaje de éxito
      Swal.fire({
        icon: 'success',
        title: 'Datos ingresados correctamente',
        text: `Nombre: ${nombreApellidos.value}, Edad: ${edad.value}`,
      });
    };

    return {
      nombreApellidos,
      edad,
      empezar,
    };
  },
};
</script>

<style scoped>
/* Animaciones y estilo para el fondo inspirado en article.js */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.animate-pulse {
  animation: pulse 6s ease-in-out infinite;
}

/* Delay de la animación para hacerla más dinámica */
.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
