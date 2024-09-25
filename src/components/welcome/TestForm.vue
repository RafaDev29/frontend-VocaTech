<template>
  <div class="max-w-2xl mx-auto pb-10 mb-10 p-5 bg-white shadow-lg rounded-lg relative">
    <h1 class="text-3xl font-bold mb-8 text-center">Test de Orientación Vocacional</h1>
    
    <!-- Mostramos un indicador de procesando mientras esperamos la respuesta -->
    <div v-if="isLoading" class="text-center text-xl text-blue-500">
      Procesando tus respuestas...
    </div>

    <!-- Si ya tenemos los resultados, mostramos el componente con los resultados -->
    <ResultDisplay v-if="result" :result="result" />

    <!-- Formulario de preguntas -->
    <div v-else>
      <div class="flex flex-col items-center justify-center space-y-8">
        <h3 class="text-xl font-semibold text-center">{{ preguntas[currentQuestion].text }}</h3>

        <div class="w-full flex flex-col space-y-4">
          <div v-for="(opcion, i) in preguntas[currentQuestion].opciones" :key="i" class="flex items-center">
            <input
              type="radio"
              :name="'pregunta-' + currentQuestion"
              :value="opcion.letra" 
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
        <button v-if="currentQuestion > 0" @click="prevQuestion" class="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 text-gray-700">
          &larr; Anterior
        </button>

        <button v-if="currentQuestion < preguntas.length - 1" @click="nextQuestion" :disabled="!respuestas[currentQuestion]"
          class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300">
          Siguiente &rarr;
        </button>

        <button v-if="currentQuestion === preguntas.length - 1" @click="submitTest" :disabled="!respuestas[currentQuestion]"
          class="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 disabled:bg-green-300">
          Enviar Respuestas
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { weilcomeApi } from '@/api/welcomeService';
import ResultDisplay from '@/components/welcome/ResultDisplay.vue';

export default {
  components: {
    ResultDisplay
  },
  data() {
    return {
      currentQuestion: 0, // Controla qué pregunta se está mostrando
      preguntas: [
  {
    text: "¿Qué actividad disfrutas más en tus ratos libres?",
    opciones: [
      { text: "Hacer manualidades o diseñar", area: "Arte y Creatividad", letra: "A" },
      { text: "Leer sobre psicología o sociología", area: "Ciencias Sociales y Jurídicas", letra: "B" },
      { text: "Planificar eventos o gestionar proyectos", area: "Economía, Administración y Financiera", letra: "C" },
      { text: "Construir cosas o experimentar con gadgets tecnológicos", area: "Ingeniería y Arquitectura", letra: "D" },
      { text: "Hacer experimentos en la cocina o estudiar sobre animales", area: "Ciencias Biológicas, Ecológicas y de Salud", letra: "E" }
    ]
  },
  {
    text: "¿Qué tipo de series o películas prefieres ver?",
    opciones: [
      { text: "Documentales sobre arte o diseño", area: "Arte y Creatividad", letra: "A" },
      { text: "Series sobre casos criminales o dramas sociales", area: "Ciencias Sociales y Jurídicas", letra: "B" },
      { text: "Documentales sobre negocios o economía", area: "Economía, Administración y Financiera", letra: "C" },
      { text: "Películas de ciencia ficción o sobre avances tecnológicos", area: "Ingeniería y Arquitectura", letra: "D" },
      { text: "Documentales sobre naturaleza o medicina", area: "Ciencias Biológicas, Ecológicas y de Salud", letra: "E" }
    ]
  },
  {
    text: "¿Cuál de estos pasatiempos te resulta más atractivo?",
    opciones: [
      { text: "Pintar, dibujar o diseñar moda", area: "Arte y Creatividad", letra: "A" },
      { text: "Participar en debates o actividades comunitarias", area: "Ciencias Sociales y Jurídicas", letra: "B" },
      { text: "Crear un presupuesto familiar o gestionar inversiones", area: "Economía, Administración y Financiera", letra: "C" },
      { text: "Armar o desmontar equipos electrónicos", area: "Ingeniería y Arquitectura", letra: "D" },
      { text: "Cuidar plantas o entrenar mascotas", area: "Ciencias Biológicas, Ecológicas y de Salud", letra: "E" }
    ]
  },
  {
    text: "¿Qué tipo de libros disfrutas leer?",
    opciones: [
      { text: "Libros sobre técnicas artísticas o diseño", area: "Arte y Creatividad", letra: "A" },
      { text: "Libros sobre comportamiento humano o casos legales", area: "Ciencias Sociales y Jurídicas", letra: "B" },
      { text: "Libros sobre economía o gestión empresarial", area: "Economía, Administración y Financiera", letra: "C" },
      { text: "Libros sobre ingeniería, arquitectura o tecnología", area: "Ingeniería y Arquitectura", letra: "D" },
      { text: "Libros sobre biología, medicina o zoología", area: "Ciencias Biológicas, Ecológicas y de Salud", letra: "E" }
    ]
  },
  {
    text: "¿Cuál es tu tipo de evento favorito para asistir?",
    opciones: [
      { text: "Exposiciones de arte o ferias de diseño", area: "Arte y Creatividad", letra: "A" },
      { text: "Charlas sobre temas sociales o conferencias educativas", area: "Ciencias Sociales y Jurídicas", letra: "B" },
      { text: "Seminarios sobre negocios o talleres de gestión", area: "Economía, Administración y Financiera", letra: "C" },
      { text: "Eventos de tecnología o construcción", area: "Ingeniería y Arquitectura", letra: "D" },
      { text: "Ferias de ciencia o eventos relacionados con la salud", area: "Ciencias Biológicas, Ecológicas y de Salud", letra: "E" }
    ]
  },
  {
    text: "¿Qué te motiva más a la hora de elegir una actividad recreativa?",
    opciones: [
      { text: "La posibilidad de ser creativo y experimentar", area: "Arte y Creatividad", letra: "A" },
      { text: "La oportunidad de aprender sobre la sociedad y ayudar a otros", area: "Ciencias Sociales y Jurídicas", letra: "B" },
      { text: "Desarrollar habilidades organizativas y financieras", area: "Economía, Administración y Financiera", letra: "C" },
      { text: "Resolver problemas técnicos y aprender sobre tecnología", area: "Ingeniería y Arquitectura", letra: "D" },
      { text: "Explorar el mundo natural y aprender sobre salud", area: "Ciencias Biológicas, Ecológicas y de Salud", letra: "E" }
    ]
  },
  {
    text: "¿Qué tipo de proyectos te gustaría hacer en tu tiempo libre?",
    opciones: [
      { text: "Diseñar tu propio espacio o hacer arte", area: "Arte y Creatividad", letra: "A" },
      { text: "Voluntariado en la comunidad o organizar eventos educativos", area: "Ciencias Sociales y Jurídicas", letra: "B" },
      { text: "Crear un plan de ahorro o gestionar un pequeño negocio", area: "Economía, Administración y Financiera", letra: "C" },
      { text: "Construir un modelo o desarrollar un software", area: "Ingeniería y Arquitectura", letra: "D" },
      { text: "Investigar sobre el cuidado de plantas o hacer recetas saludables", area: "Ciencias Biológicas, Ecológicas y de Salud", letra: "E" }
    ]
  },
  {
    text: "¿Qué tipo de actividades disfrutas en reuniones sociales?",
    opciones: [
      { text: "Participar en talleres creativos o actividades artísticas", area: "Arte y Creatividad", letra: "A" },
      { text: "Discutir temas sociales o colaborar en proyectos comunitarios", area: "Ciencias Sociales y Jurídicas", letra: "B" },
      { text: "Hablar sobre estrategias empresariales o finanzas", area: "Economía, Administración y Financiera", letra: "C" },
      { text: "Conversar sobre nuevas tecnologías o proyectos de ingeniería", area: "Ingeniería y Arquitectura", letra: "D" },
      { text: "Hablar sobre descubrimientos científicos o cuidados de salud", area: "Ciencias Biológicas, Ecológicas y de Salud", letra: "E" }
    ]
  },
  {
    text: "¿Cómo prefieres pasar un día libre?",
    opciones: [
      { text: "Explorando museos o creando algo nuevo", area: "Arte y Creatividad", letra: "A" },
      { text: "Participando en actividades que promuevan el bienestar social", area: "Ciencias Sociales y Jurídicas", letra: "B" },
      { text: "Organizando tus finanzas o planificando futuros proyectos", area: "Economía, Administración y Financiera", letra: "C" },
      { text: "Trabajando en un proyecto de tecnología o construcción", area: "Ingeniería y Arquitectura", letra: "D" },
      { text: "Realizando actividades al aire libre o aprendiendo sobre la naturaleza", area: "Ciencias Biológicas, Ecológicas y de Salud", letra: "E" }
    ]
  },
  {
    text: "¿Qué aspecto de un trabajo te parece más atractivo?",
    opciones: [
      { text: "La posibilidad de expresarte creativamente", area: "Arte y Creatividad", letra: "A" },
      { text: "La oportunidad de hacer una diferencia en la vida de las personas", area: "Ciencias Sociales y Jurídicas", letra: "B" },
      { text: "Administrar y mejorar recursos y proyectos", area: "Economía, Administración y Financiera", letra: "C" },
      { text: "Resolver problemas complejos y diseñar soluciones", area: "Ingeniería y Arquitectura", letra: "D" },
      { text: "Contribuir al conocimiento científico y mejorar la salud", area: "Ciencias Biológicas, Ecológicas y de Salud", letra: "E" }
    ]
  }
],
      respuestas: [], // Aquí se guardarán las respuestas de cada pregunta
      isLoading: false, // Indicador de carga
      result: null // Aquí se almacenarán los resultados de la API
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
      // Al enviar las respuestas, formateamos el JSON
      const resultado = {};
      this.respuestas.forEach((respuesta, index) => {
        resultado[`question${index + 1}`] = respuesta;
      });

      // Mostramos el indicador de carga
      this.isLoading = true;

      // Llamada al servicio para enviar los datos
      weilcomeApi(resultado)
        .then(response => {
          this.result = response.data.data; // Guardamos el resultado de la API
          this.isLoading = false; // Ocultamos el indicador de carga
        })
        .catch(error => {
          console.error("Error al enviar las respuestas:", error);
          this.isLoading = false; // Ocultamos el indicador de carga en caso de error
        });
    }
  }
};
</script>

<style scoped>
/* Personalización adicional si es necesaria */
</style>
