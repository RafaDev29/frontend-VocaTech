<template>
    <div class="bg-gradient-to-b from-purple-500 to-indigo-600 min-h-screen flex flex-col items-center justify-center">
      <div class="text-center text-white mb-8">
        <h2 class="text-4xl font-extrabold">¡Aquí están tus resultados!</h2>
        <p class="text-lg font-semibold mt-2">Descubre las áreas profesionales que se adaptan a tu perfil</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Área Principal -->
        <div class="bg-white rounded-lg shadow-lg p-6 max-w-xs text-center">
          <span class="mdi mdi-school text-5xl text-indigo-500 mb-4 block"></span>
          <h3 class="text-xl font-bold text-gray-900">Área Principal</h3>
          <p class="text-lg text-gray-700 mt-2">{{ result.area1 }}</p>
        </div>
  
        <!-- Área Secundaria -->
        <div class="bg-white rounded-lg shadow-lg p-6 max-w-xs text-center">
          <span class="mdi mdi-lightbulb-on text-5xl text-yellow-500 mb-4 block"></span>
          <h3 class="text-xl font-bold text-gray-900">Área Secundaria</h3>
          <p class="text-lg text-gray-700 mt-2">{{ result.area2 }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      result: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  @import '@mdi/font/css/materialdesignicons.min.css';
  </style>
  