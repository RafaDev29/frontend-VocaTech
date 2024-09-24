<template>
    <div class="max-w-2xl mx-auto pb-10 mb-10 p-5 bg-white shadow-lg rounded-lg relative">
      <h1 class="text-3xl font-bold mb-8 text-center">Test de Orientación Vocacional</h1>
      
      <!-- Contenedor de las preguntas -->
      <div class="flex flex-col items-center justify-center space-y-8">
        <h3 class="text-xl font-semibold text-center">{{ preguntas[currentQuestion].text }}</h3>
  
        <div class="w-full flex flex-col space-y-4">
          <div v-for="(opcion, i) in preguntas[currentQuestion].opciones" :key="i" class="flex items-center">
            <input
              type="radio"
              :name="'pregunta-' + currentQuestion"
              :value="opcion.area"
              v-model="respuestas[currentQuestion]"
              class="mr-3"
              required
            />
            <label class="text-gray-700 text-lg">{{ opcion.text }}</label>
          </div>
        </div>
      </div>
  
      <!-- Botones de navegación -->
      <div class="flex justify-between mt-8">
        <button 
          v-if="currentQuestion > 0" 
          @click="prevQuestion" 
          class="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 text-gray-700"
        >
          &larr; Anterior
        </button>
  
        <button 
          v-if="currentQuestion < preguntas.length - 1" 
          @click="nextQuestion" 
          :disabled="!respuestas[currentQuestion]"
          class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
        >
          Siguiente &rarr;
        </button>
  
        <button 
          v-if="currentQuestion === preguntas.length - 1" 
          @click="submitTest" 
          :disabled="!respuestas[currentQuestion]"
          class="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 disabled:bg-green-300"
        >
          Enviar Respuestas
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentQuestion: 0, // Controla qué pregunta se está mostrando
        preguntas: [
        {
          text: "¿Qué actividad disfrutas más en tus ratos libres?",
          opciones: [
            { text: "Hacer manualidades o diseñar", area: "Arte y Creatividad" },
            { text: "Leer sobre psicología o sociología", area: "Ciencias Sociales y Jurídicas" },
            { text: "Planificar eventos o gestionar proyectos", area: "Economía, Administración y Financiera" },
            { text: "Construir cosas o experimentar con gadgets tecnológicos", area: "Ingeniería y Arquitectura" },
            { text: "Hacer experimentos en la cocina o estudiar sobre animales", area: "Ciencias Biológicas, Ecológicas y de Salud" }
          ]
        },
        {
          text: "¿Qué tipo de series o películas prefieres ver?",
          opciones: [
            { text: "Documentales sobre arte o diseño", area: "Arte y Creatividad" },
            { text: "Series sobre casos criminales o dramas sociales", area: "Ciencias Sociales y Jurídicas" },
            { text: "Documentales sobre negocios o economía", area: "Economía, Administración y Financiera" },
            { text: "Películas de ciencia ficción o sobre avances tecnológicos", area: "Ingeniería y Arquitectura" },
            { text: "Documentales sobre naturaleza o medicina", area: "Ciencias Biológicas, Ecológicas y de Salud" }
          ]
        },
        {
          text: "¿Cuál de estos pasatiempos te resulta más atractivo?",
          opciones: [
            { text: "Pintar, dibujar o diseñar moda", area: "Arte y Creatividad" },
            { text: "Participar en debates o actividades comunitarias", area: "Ciencias Sociales y Jurídicas" },
            { text: "Crear un presupuesto familiar o gestionar inversiones", area: "Economía, Administración y Financiera" },
            { text: "Armar o desmontar equipos electrónicos", area: "Ingeniería y Arquitectura" },
            { text: "Cuidar plantas o entrenar mascotas", area: "Ciencias Biológicas, Ecológicas y de Salud" }
          ]
        },
        {
          text: "¿Qué tipo de libros disfrutas leer?",
          opciones: [
            { text: "Libros sobre técnicas artísticas o diseño", area: "Arte y Creatividad" },
            { text: "Libros sobre comportamiento humano o casos legales", area: "Ciencias Sociales y Jurídicas" },
            { text: "Libros sobre economía o gestión empresarial", area: "Economía, Administración y Financiera" },
            { text: "Libros sobre ingeniería, arquitectura o tecnología", area: "Ingeniería y Arquitectura" },
            { text: "Libros sobre biología, medicina o zoología", area: "Ciencias Biológicas, Ecológicas y de Salud" }
          ]
        },
        {
          text: "¿Cuál es tu tipo de evento favorito para asistir?",
          opciones: [
            { text: "Exposiciones de arte o ferias de diseño", area: "Arte y Creatividad" },
            { text: "Charlas sobre temas sociales o conferencias educativas", area: "Ciencias Sociales y Jurídicas" },
            { text: "Seminarios sobre negocios o talleres de gestión", area: "Economía, Administración y Financiera" },
            { text: "Eventos de tecnología o construcción", area: "Ingeniería y Arquitectura" },
            { text: "Ferias de ciencia o eventos relacionados con la salud", area: "Ciencias Biológicas, Ecológicas y de Salud" }
          ]
        },
        {
          text: "¿Qué te motiva más a la hora de elegir una actividad recreativa?",
          opciones: [
            { text: "La posibilidad de ser creativo y experimentar", area: "Arte y Creatividad" },
            { text: "La oportunidad de aprender sobre la sociedad y ayudar a otros", area: "Ciencias Sociales y Jurídicas" },
            { text: "Desarrollar habilidades organizativas y financieras", area: "Economía, Administración y Financiera" },
            { text: "Resolver problemas técnicos y aprender sobre tecnología", area: "Ingeniería y Arquitectura" },
            { text: "Explorar el mundo natural y aprender sobre salud", area: "Ciencias Biológicas, Ecológicas y de Salud" }
          ]
        },
        {
          text: "¿Qué tipo de proyectos te gustaría hacer en tu tiempo libre?",
          opciones: [
            { text: "Diseñar tu propio espacio o hacer arte", area: "Arte y Creatividad" },
            { text: "Voluntariado en la comunidad o organizar eventos educativos", area: "Ciencias Sociales y Jurídicas" },
            { text: "Crear un plan de ahorro o gestionar un pequeño negocio", area: "Economía, Administración y Financiera" },
            { text: "Construir un modelo o desarrollar un software", area: "Ingeniería y Arquitectura" },
            { text: "Investigar sobre el cuidado de plantas o hacer recetas saludables", area: "Ciencias Biológicas, Ecológicas y de Salud" }
          ]
        },
        {
          text: "¿Qué tipo de actividades disfrutas en reuniones sociales?",
          opciones: [
            { text: "Participar en talleres creativos o actividades artísticas", area: "Arte y Creatividad" },
            { text: "Discutir temas sociales o colaborar en proyectos comunitarios", area: "Ciencias Sociales y Jurídicas" },
            { text: "Hablar sobre estrategias empresariales o finanzas", area: "Economía, Administración y Financiera" },
            { text: "Conversar sobre nuevas tecnologías o proyectos de ingeniería", area: "Ingeniería y Arquitectura" },
            { text: "Hablar sobre descubrimientos científicos o cuidados de salud", area: "Ciencias Biológicas, Ecológicas y de Salud" }
          ]
        },
        {
          text: "¿Cómo prefieres pasar un día libre?",
          opciones: [
            { text: "Explorando museos o creando algo nuevo", area: "Arte y Creatividad" },
            { text: "Participando en actividades que promuevan el bienestar social", area: "Ciencias Sociales y Jurídicas" },
            { text: "Organizando tus finanzas o planificando futuros proyectos", area: "Economía, Administración y Financiera" },
            { text: "Trabajando en un proyecto de tecnología o construcción", area: "Ingeniería y Arquitectura" },
            { text: "Realizando actividades al aire libre o aprendiendo sobre la naturaleza", area: "Ciencias Biológicas, Ecológicas y de Salud" }
          ]
        },
        {
          text: "¿Qué aspecto de un trabajo te parece más atractivo?",
          opciones: [
            { text: "La posibilidad de expresarte creativamente", area: "Arte y Creatividad" },
            { text: "La oportunidad de hacer una diferencia en la vida de las personas", area: "Ciencias Sociales y Jurídicas" },
            { text: "Administrar y mejorar recursos y proyectos", area: "Economía, Administración y Financiera" },
            { text: "Resolver problemas complejos y diseñar soluciones", area: "Ingeniería y Arquitectura" },
            { text: "Contribuir al conocimiento científico y mejorar la salud", area: "Ciencias Biológicas, Ecológicas y de Salud" }
          ]
        }

        ],
        respuestas: []
      };
    },
    methods: {
      nextQuestion() {
        if (this.respuestas[this.currentQuestion] !== undefined) {
          this.currentQuestion++;
        }
      },
      prevQuestion() {
        if (this.currentQuestion > 0) {
          this.currentQuestion--;
        }
      },
      submitTest() {
        // Aquí manejarás el envío de las respuestas
        console.log(this.respuestas);
        this.processResults();
      },
      processResults() {
        // Lógica para contar las respuestas por área
        const resultados = {};
        this.respuestas.forEach(area => {
          if (resultados[area]) {
            resultados[area]++;
          } else {
            resultados[area] = 1;
          }
        });
        console.log("Resultados:", resultados);
        // Aquí puedes mostrar el resultado o enviarlo a un servidor
      }
    }
  };
  </script>
  
  <style scoped>
  /* Personalización adicional si es necesaria */
  </style>
  