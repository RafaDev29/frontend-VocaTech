<template>
    <div class="bg-white shadow-lg rounded-lg p-6 max-w-xl mx-auto">
      <h2 class="text-2xl font-bold text-center mb-4">Resultados de tu Test Vocacional</h2>
      <p class="text-lg text-gray-700 text-center mb-2">Área Principal: <strong>{{ result.area1 }}</strong></p>
      <p class="text-lg text-gray-700 text-center mb-2">Área Secundaria: <strong>{{ result.area2 }}</strong></p>
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
  /* Puedes agregar estilo adicional aquí si es necesario */
  </style>
  