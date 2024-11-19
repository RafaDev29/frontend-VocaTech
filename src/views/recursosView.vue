<template>
  <div class=" min-h-screen bg-gradient-to-r  from-blue-400 to-indigo-600 flex flex-col items-center justify-center ">
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold text-white">Recursos</h1>
      <p class="text-lg text-gray-200 mt-4">
        Encuentra aquí videos e imágenes que te ayudarán a realizar tu test vocacional.
      </p>
    </div>
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <RecursoCard
          v-for="(recurso, index) in recursos"
          :key="index"
          :titulo="recurso.titulo"
          :descripcion="recurso.descripcion"
          :url="recurso.url"
          :tipo="recurso.tipo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RecursoCard from "@/components/recursos/RecursoCard.vue";

export default {
  name: "RecursosView",
  components: { RecursoCard },
  data() {
    return {
      recursos: [
        {
          titulo: "Video: Introducción al Test Vocacional",
          descripcion: "Una breve introducción sobre cómo realizar el test vocacional.",
          url: "https://www.youtube.com/embed/VIDEO_ID",
          tipo: "video",
        },
        {
          titulo: "Imagen: Ejemplo de Resultado",
          descripcion: "Ejemplo visual de los resultados esperados.",
          url: "https://via.placeholder.com/300",
          tipo: "imagen",
        },
        {
          titulo: "Video: Consejos para el Test",
          descripcion: "Sigue estos consejos para aprovechar al máximo tu test vocacional.",
          url: "https://www.youtube.com/embed/ANOTHER_VIDEO_ID",
          tipo: "video",
        },
      ],
    };
  },
};
</script>
