<template>
  <div class="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex flex-col items-center justify-center">
    <!-- Encabezado llamativo con íconos -->
    <div class="text-center">
      <h1 class="text-5xl font-extrabold text-white mb-4">
        <span class="mdi mdi-account-search-outline"></span> Test Vocacional
      </h1>
      <p class="text-lg text-white font-semibold">
        Descubre tu camino profesional en solo unos minutos <span class="mdi mdi-timer-outline"></span>
      </p>
    </div>

    <!-- Componente del formulario -->
    <div class="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 mt-8">
      <VocationalForm />
    </div>

    <!-- Mensaje motivacional al final -->
    <div class="text-center text-white text-lg mt-8">
      ¡Completa el test y descubre las mejores carreras para ti! <span class="mdi mdi-star-outline text-yellow-400"></span>
    </div>
  </div>
</template>

<script>
import VocationalForm from "@/components/vocacional/VocationalForm.vue";

export default {
  components: {
    VocationalForm,
  },
};
</script>

<style scoped>
@import '@mdi/font/css/materialdesignicons.min.css'; /* Importa MDI Icons */
</style>
