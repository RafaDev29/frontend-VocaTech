<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';  // Importar el router
import Swal from 'sweetalert2'; 

export default {
  setup() {
    const store = useStore();
    const router = useRouter();  // Inicializar el router
    const nombreApellidos = ref('');
    const edad = ref('');

    const empezar = () => {
      if (!nombreApellidos.value) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, ingrese su nombre y apellidos.',
        });
        return;
      }

      if (!edad.value) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, ingrese su edad.',
        });
        return;
      }

      // Almacenar en Vuex
      store.commit('setNombreApellidos', nombreApellidos.value);
      store.commit('setEdad', edad.value);

      // Redirigir a la nueva vista de bienvenida
      router.push({ name: 'welcome' });

      // Mensaje de éxito
      Swal.fire({
        icon: 'success',
        title: 'Datos ingresados correctamente',
        text: `Nombre: ${nombreApellidos.value}, Edad: ${edad.value}`,
      });
    };

    return {
      nombreApellidos,
      edad,
      empezar,
    };
  },
};
</script>
