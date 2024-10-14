<template>
    <div class="max-w-3xl mx-auto mt-10">
      <h1 class="text-3xl font-bold mb-8 text-center">Test de Orientación Vocacional</h1>
  
      <!-- Indicador de procesamiento -->
      <div v-if="isLoading" class="text-center text-xl text-blue-500">
        Procesando tus respuestas...
      </div>
  
      <!-- Mostrar resultado del test cognitivo y botón de continuar -->
      <div v-if="result && !showLikertTest">
        <p>¡Test cognitivo completado! ¿Listo para continuar con la siguiente parte?</p>
        <button @click="showLikertTest = true" class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          Continuar
        </button>
      </div>
  
      <!-- Formulario del test cognitivo -->
      <div v-else-if="!result && !showLikertTest">
        <div class="flex flex-col items-center justify-center space-y-8">
          <h3 class="text-xl font-semibold text-center">{{ areas[currentArea].name }}</h3>
  
          <!-- Mostrar las tres preguntas de un área -->
          <div v-for="(question, index) in areas[currentArea].questions" :key="index" class="w-full flex flex-col space-y-4">
            <h3 class="text-lg font-medium">{{ question.text }}</h3>
            <div v-for="(opcion, i) in question.opciones" :key="i" class="flex items-center">
              <input
                type="radio"
                :name="'pregunta-' + currentArea + '-' + index"
                :value="opcion.letra"
                v-model="respuestas[currentArea][index]"
                class="mr-3"
                required
              />
              <label class="text-gray-700 text-lg">{{ opcion.text }}</label>
            </div>
          </div>
        </div>
  
        <!-- Botones de navegación -->
        <div class="flex justify-between mt-8">
          <button v-if="currentArea > 0" @click="prevArea" class="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 text-gray-700">
            &larr; Anterior
          </button>
  
          <button v-if="currentArea < areas.length - 1" @click="nextArea" :disabled="!areAllQuestionsAnswered"
            class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300">
            Siguiente &rarr;
          </button>
  
          <button v-if="currentArea === areas.length - 1" @click="submitTest" :disabled="!areAllQuestionsAnswered"
            class="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 disabled:bg-green-300">
            Continuar
          </button>
        </div>
      </div>
  
      <!-- Test de escala de Likert por área -->
      <div v-if="showLikertTest">
        <h2 class="text-2xl font-bold mb-6 text-center">{{ areasLikert[currentAreaLikert].name }}</h2>
  
        <div v-for="(situacion, index) in areasLikert[currentAreaLikert].situaciones" :key="index" class="mb-8">
          <h3 class="text-xl font-semibold">{{ situacion.text }}</h3>
          <div class="flex space-x-4 mt-4">
            <label v-for="i in 5" :key="i" class="flex items-center">
              <input
                type="radio"
                :name="'situacion-' + currentAreaLikert + '-' + index"
                :value="i - 1"
                v-model="respuestasLikert[currentAreaLikert][index]"
                class="mr-2"
              />
              <span>{{ i - 1 }}</span>
            </label>
          </div>
        </div>
  
        <!-- Botones de navegación en test de Likert -->
        <div class="flex justify-between mt-8">
          <button v-if="currentAreaLikert > 0" @click="prevLikertArea" class="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 text-gray-700">
            &larr; Anterior
          </button>
  
          <button v-if="currentAreaLikert < areasLikert.length - 1" @click="nextLikertArea" :disabled="!areAllLikertQuestionsAnswered"
            class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300">
            Siguiente &rarr;
          </button>
  
          <button v-if="currentAreaLikert === areasLikert.length - 1" @click="submitLikertTest" :disabled="!areAllLikertQuestionsAnswered"
            class="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 disabled:bg-green-300">
            Enviar Respuestas
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentArea: 0, // Controla qué área se está mostrando en el test cognitivo
        currentAreaLikert: 0, // Controla qué área se está mostrando en el test de Likert
        respuestas: [[], [], [], [], []], // Array para guardar las respuestas por área del test cognitivo
        respuestasLikert: [[], [], [], [], []], // Array para guardar las respuestas por área del test de Likert
        isLoading: false, // Indicador de carga
        result: null, // Resultado del test cognitivo
        showLikertTest: false, // Controla la visibilidad del test de Likert
        areas: [
  {
    name: "Área 1: Arte y Creatividad",
    questions: [
      {
        text: "1. ¿Cuál de las siguientes herramientas se utiliza comúnmente en diseño gráfico?",
        opciones: [
          { text: "A) Adobe Photoshop", letra: "A" },
          { text: "B) Microsoft Excel", letra: "B" },
          { text: "C) AutoCAD", letra: "C" }
        ]
      },
      {
        text: "2. ¿Qué es el 'color complementario'?",
        opciones: [
          { text: "A) Un color que se mezcla con otro para crear un nuevo color.", letra: "A" },
          { text: "B) Un color que se opone a otro en la rueda de colores.", letra: "B" },
          { text: "C) Un color que se usa exclusivamente en la moda.", letra: "C" }
        ]
      },
      {
        text: "3. ¿Cuál es la función principal de un director de arte en una producción?",
        opciones: [
          { text: "A) Manejar el presupuesto.", letra: "A" },
          { text: "B) Definir la estética visual del proyecto.", letra: "B" },
          { text: "C) Escribir el guion.", letra: "C" }
        ]
      }
    ]
  },
  {
    name: "Área 2: Ciencias Sociales y Jurídicas",
    questions: [
      {
        text: "1. ¿Qué estudia la psicología?",
        opciones: [
          { text: "A) El comportamiento humano y los procesos mentales.", letra: "A" },
          { text: "B) Las leyes y normas sociales.", letra: "B" },
          { text: "C) La economía de un país.", letra: "C" }
        ]
      },
      {
        text: "2. En educación, ¿qué se entiende por 'metodología activa'?",
        opciones: [
          { text: "A) Un enfoque donde el docente es el único que habla.", letra: "A" },
          { text: "B) Métodos que involucran activamente a los estudiantes en su aprendizaje.", letra: "B" },
          { text: "C) La evaluación de exámenes escritos.", letra: "C" }
        ]
      },
      {
        text: "3. ¿Cuál es el propósito principal del trabajo social?",
        opciones: [
          { text: "A) Mejorar la economía de una comunidad.", letra: "A" },
          { text: "B) Ayudar a individuos y comunidades a enfrentar problemas sociales.", letra: "B" },
          { text: "C) Promover la justicia penal.", letra: "C" }
        ]
      }
    ]
  },
  {
    name: "Área 3: Economía, Administración y Financiera",
    questions: [
      {
        text: "1. ¿Qué es un balance general?",
        opciones: [
          { text: "A) Un informe sobre las ganancias de una empresa.", letra: "A" },
          { text: "B) Un documento que muestra la situación financiera de una empresa en un momento dado.", letra: "B" },
          { text: "C) Un análisis de mercado.", letra: "C" }
        ]
      },
      {
        text: "2. ¿Qué se entiende por 'oferta' en economía?",
        opciones: [
          { text: "A) La cantidad de productos que los consumidores desean comprar.", letra: "A" },
          { text: "B) La cantidad de productos que los productores están dispuestos a vender.", letra: "B" },
          { text: "C) La tasa de interés en un préstamo.", letra: "C" }
        ]
      },
      {
        text: "3. ¿Cuál es la función de un administrador de empresas?",
        opciones: [
          { text: "A) Diseñar productos nuevos.", letra: "A" },
          { text: "B) Planificar y coordinar las actividades de una empresa.", letra: "B" },
          { text: "C) Enseñar a los empleados.", letra: "C" }
        ]
      }
    ]
  },
  {
    name: "Área 4: Ingeniería y Arquitectura",
    questions: [
      {
        text: "1. ¿Qué es un plano arquitectónico?",
        opciones: [
          { text: "A) Un esquema financiero de un proyecto.", letra: "A" },
          { text: "B) Un diseño detallado de un edificio.", letra: "B" },
          { text: "C) Un estudio de mercado.", letra: "C" }
        ]
      },
      {
        text: "2. En ingeniería eléctrica, ¿qué es la 'resistencia'?",
        opciones: [
          { text: "A) La capacidad de un material para soportar peso.", letra: "A" },
          { text: "B) La oposición al flujo de corriente eléctrica.", letra: "B" },
          { text: "C) La cantidad de energía generada.", letra: "C" }
        ]
      },
      {
        text: "3. ¿Qué software se utiliza para diseño asistido por computadora (CAD)?",
        opciones: [
          { text: "A) Microsoft Word", letra: "A" },
          { text: "B) AutoCAD", letra: "B" },
          { text: "C) Adobe Illustrator", letra: "C" }
        ]
      }
    ]
  },
  {
    name: "Área 5: Ciencias Biológicas, Ecológicas y de Salud",
    questions: [
      {
        text: "1. ¿Cuál es la función principal del sistema inmunológico?",
        opciones: [
          { text: "A) Regular el crecimiento.", letra: "A" },
          { text: "B) Proteger al cuerpo de infecciones.", letra: "B" },
          { text: "C) Procesar alimentos.", letra: "C" }
        ]
      },
      {
        text: "2. ¿Qué estudia la biología?",
        opciones: [
          { text: "A) La vida y los organismos vivos.", letra: "A" },
          { text: "B) La economía de los países.", letra: "B" },
          { text: "C) Las leyes y normas sociales.", letra: "C" }
        ]
      },
      {
        text: "3. ¿Qué es la medicina preventiva?",
        opciones: [
          { text: "A) El tratamiento de enfermedades ya existentes.", letra: "A" },
          { text: "B) Estrategias para prevenir enfermedades antes de que ocurran.", letra: "B" },
          { text: "C) Diagnóstico de enfermedades antes de que sucedan.", letra: "C" }
        ]
      }
    ]
  }
],
areasLikert: [
        {
          name: "Área 1: Arte y Creatividad",
          situaciones: [
            { text: "Situación 1: Diseño Gráfico - ¿Qué tan satisfecho te sientes con esta actividad?" },
            { text: "Situación 2: Producción Audiovisual - ¿Qué tan satisfecho te sientes con este trabajo?" }
          ]
        },
        {
          name: "Área 2: Ciencias Sociales y Jurídicas",
          situaciones: [
            { text: "Situación 3: Psicología - ¿Qué tan satisfecho te sientes con esta experiencia?" },
            { text: "Situación 4: Educación - ¿Qué tan satisfecho te sientes con esta labor?" }
          ]
        },
        {
          name: "Área 3: Economía, Administración y Financiera",
          situaciones: [
            { text: "Situación 5: Contabilidad - ¿Qué tan satisfecho te sientes con este trabajo?" },
            { text: "Situación 6: Hotelería y Turismo - ¿Qué tan satisfecho te sientes con esta actividad?" }
          ]
        },
        {
          name: "Área 4: Ingeniería y Arquitectura",
          situaciones: [
            { text: "Situación 7: Ingeniería Informática - ¿Qué tan satisfecho te sientes con esta experiencia?" },
            { text: "Situación 8: Arquitectura - ¿Qué tan satisfecho te sientes con esta labor?" }
          ]
        },
        {
          name: "Área 5: Ciencias Biológicas, Ecológicas y de Salud",
          situaciones: [
            { text: "Situación 9: Medicina - ¿Qué tan satisfecho te sientes con esta actividad?" },
            { text: "Situación 10: Biología - ¿Qué tan satisfecho te sientes con esta experiencia?" }
          ]
        }
      ] // Aquí puedes agregar tus áreas y situaciones de Likert
      };
    },
    computed: {
      areAllQuestionsAnswered() {
        return this.respuestas[this.currentArea].length === this.areas[this.currentArea].questions.length;
      },
      areAllLikertQuestionsAnswered() {
        return this.respuestasLikert[this.currentAreaLikert].length === this.areasLikert[this.currentAreaLikert].situaciones.length;
      }
    },
    methods: {
      nextArea() {
        if (this.areAllQuestionsAnswered) {
          this.currentArea++;
        }
      },
      prevArea() {
        if (this.currentArea > 0) {
          this.currentArea--;
        }
      },
      submitTest() {
        const resultado = {};
        this.respuestas.forEach((respuestasArea, areaIndex) => {
          respuestasArea.forEach((respuesta, preguntaIndex) => {
            const key = `R${preguntaIndex + 1}_A${areaIndex + 1}`;
            resultado[key] = respuesta;
          });
        });
  
        console.log("Respuestas formateadas del test cognitivo:", resultado);
        this.result = resultado; // Guardar resultado del test cognitivo
      },
      nextLikertArea() {
        if (this.areAllLikertQuestionsAnswered) {
          this.currentAreaLikert++;
        }
      },
      prevLikertArea() {
        if (this.currentAreaLikert > 0) {
          this.currentAreaLikert--;
        }
      },
      submitLikertTest() {
        const respuestasLikertFormateadas = {};
        this.areasLikert.forEach((area, areaIndex) => {
          area.situaciones.forEach((situacion, situacionIndex) => {
            const key = `S${situacionIndex + 1}_A${areaIndex + 1}`;
            respuestasLikertFormateadas[key] = this.respuestasLikert[areaIndex][situacionIndex];
          });
        });
  
        // Combinación de las respuestas del test cognitivo y Likert
        const resultadoFinal = {
          test_cognitivo: this.result,
          cuestionario_laboral: respuestasLikertFormateadas
        };
  
        console.log("JSON final:", resultadoFinal);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Personalización adicional si es necesaria */
  </style>
  