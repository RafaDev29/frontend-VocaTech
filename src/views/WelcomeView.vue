<template>
  <div class="min-h-screen bg-gradient-to-r  from-blue-400 to-indigo-600 flex flex-col items-center justify-center">
    <!-- Encabezado llamativo con íconos -->
    <div class="text-center">
      <h1 class="text-5xl font-extrabold text-white mb-4">
        <span class="mdi mdi-school-outline"></span> Test perfil básico
      </h1>
      <p class="text-lg text-white font-semibold">
        Descubre tu perfil profesional en solo unos minutos <span class="mdi mdi-timer-outline"></span>
      </p>
    </div>

    <!-- Componente del formulario -->
    <div class="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
      <TestForm />
    </div>

    <!-- Mensaje motivacional al final -->
    <div class=" text-center text-white text-lg">
      ¡Completa el test y descubre qué carreras te esperan! <span class="mdi mdi-star-circle-outline text-yellow-400"></span>
    </div>
  </div>
</template>

<script>
import TestForm from '@/components/welcome/TestForm.vue';

export default {
  components: {
    TestForm
  }
};
</script>

<style scoped>
@import '@mdi/font/css/materialdesignicons.min.css'; /* Importa MDI Icons */
</style>
