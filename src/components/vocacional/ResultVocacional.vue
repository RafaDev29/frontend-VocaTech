<template>
    <div class="max-w-4xl mx-auto mt-10 text-center">
      <!-- Título principal -->
      <h1 class="text-4xl font-extrabold text-indigo-700 mb-8">Carreras sugeridas</h1>
  
      <!-- Icono animado de persona -->
      <div class="flex justify-center mb-8">
        <span class="mdi mdi-account-circle-outline text-indigo-600 text-6xl animate-bounce"></span>
      </div>
  
      <!-- Tarjetas de carreras sugeridas -->
      <div v-if="careers && careers.length" class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(career, index) in careers" :key="index" class="p-6 bg-white shadow-lg rounded-lg">
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">{{ career }}</h3>
          <p class="text-gray-600">
            Esta carrera se ajusta a tu perfil profesional según tus respuestas en el test vocacional.
          </p>
          <!-- Icono decorativo -->
          <div class="flex justify-center mt-4">
            <span class="mdi mdi-school text-indigo-600 text-5xl"></span>
          </div>
        </div>
      </div>
  
      <!-- Mensaje cuando no hay sugerencias -->
      <div v-else>
        <p class="text-xl text-red-500">No se encontraron sugerencias.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      careers: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Personalización adicional si es necesaria */
  </style>
  