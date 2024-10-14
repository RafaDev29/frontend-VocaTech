<template>
    <div>
      <v-form @submit.prevent="submitForm">
        <!-- Mostrar la pregunta actual -->
        <div v-if="currentQuestion < questions.length">
          <h2>{{ questions[currentQuestion].question }}</h2>
          <v-radio-group v-model="answers[currentQuestion]" mandatory>
            <v-radio
              v-for="(option, index) in questions[currentQuestion].options"
              :key="index"
              :label="option.text"
              :value="option.value"
            ></v-radio>
          </v-radio-group>
          
          <!-- Botones de navegación -->
          <v-btn v-if="currentQuestion > 0" @click="previousQuestion">Atrás</v-btn>
          <v-btn v-if="currentQuestion < questions.length - 1" @click="nextQuestion">Continuar</v-btn>
          <v-btn v-if="currentQuestion === questions.length - 1" type="submit" color="primary">Finalizar</v-btn>
        </div>
  
        <!-- Mensaje al finalizar el cuestionario -->
        <div v-else>
          <h2>¡Test completado!</h2>
          <p>Gracias por completar el test.</p>
        </div>
      </v-form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentQuestion: 0, // Seguimiento de la pregunta actual
        answers: [], // Almacena las respuestas seleccionadas
        questions: [
          {
            area: "Arte y Creatividad",
            question: "¿Cuál de las siguientes herramientas se utiliza comúnmente en diseño gráfico?",
            options: [
              { text: "A) Adobe Photoshop", value: "A" },
              { text: "B) Microsoft Excel", value: "B" },
              { text: "C) AutoCAD", value: "C" }
            ]
          },
          {
            area: "Arte y Creatividad",
            question: "¿Qué es el 'color complementario'?",
            options: [
              { text: "A) Un color que se mezcla con otro para crear un nuevo color.", value: "A" },
              { text: "B) Un color que se opone a otro en la rueda de colores.", value: "B" },
              { text: "C) Un color que se usa exclusivamente en la moda.", value: "C" }
            ]
          },
          // Añade todas las demás preguntas de las diferentes áreas
        ]
      };
    },
    methods: {
      nextQuestion() {
        this.currentQuestion++;
      },
      previousQuestion() {
        this.currentQuestion--;
      },
      submitForm() {
        console.log("Respuestas:", this.answers);
        // Lógica para enviar las respuestas al backend o almacenarlas
      }
    }
  };
  </script>
  