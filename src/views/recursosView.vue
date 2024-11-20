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
          titulo: "Video: Recurso 1",
          descripcion: "¿Buscas una carrera con un buen salario? En la siguiente nota, conoce las 7 carreras mejor pagadas en Perú para este 2023. Los sueldos pueden superar los S/ 4.000",
          url: "https://www.youtube.com/embed/WdCFBovybf0",
          tipo: "video",
        },
        {
          titulo: "Video: Recurso 1",
          descripcion: "¿Te gustaría aprender una carrera técnica que te permita desarrollar tus habilidades? En este videoencontrás información que necesitas saber sobre las carreras técnicas desde la duración, requisitos, ventajas, desventajas, cómo puedes acceder a ellas y algunos ejemplos.",
          url: "https://www.youtube.com/embed/TN6sdNKPuTQ",
          tipo: "video",
        },
        {
          titulo: "Video: Recurso 3",
          descripcion: "¿Cuáles son las carreras del futuro? En este video veremos cuáles son las profesiones y carreras que crecerán muchísimo en el futuro. Son relacionadas a la robótica, inteligencia artificial, medio ambiente, y tecnológicas.",
          url: "https://www.youtube.com/embed/01P8RdUj_R0" ,
          tipo: "video",
        },
      ],
    };
  },
};
</script>
