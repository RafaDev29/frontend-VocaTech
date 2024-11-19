<template>
    <div class="bg-gray-50 p-6 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 mb-5">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">{{ titulo }}</h2>
      <p class="text-gray-600 mb-4">{{ descripcion }}</p>
      <div v-if="tipo === 'video'" class="aspect-w-16 aspect-h-9">
        <iframe
          :src="url"
          frameborder="0"
          allowfullscreen
          class="rounded-lg w-full h-full"
        ></iframe>
      </div>
      <div v-else-if="tipo === 'imagen'">
        <img :src="url" alt="Recurso visual" class="w-full h-auto rounded-lg shadow-md" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "RecursoCard",
    props: {
      titulo: {
        type: String,
        required: true,
      },
      descripcion: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      tipo: {
        type: String,
        required: true, // 'video' o 'imagen'
      },
    },
  };
  </script>
  
  <style scoped>
  .aspect-w-16 {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
  }
  .aspect-w-16 iframe {
    position: absolute;
    top: 0;
    left: 0;
  }
  </style>
  