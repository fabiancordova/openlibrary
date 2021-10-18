<template>
<!-- componente pedimos al usuario que introduzca el nombre del autor y 
mostramos un listado de los libros de este al pulsar un botón -->
  <v-container class="SubjectForm">
    <div v-if="show">
      <Title msgString="were found related to" :msgVar='$store.state.nameSubject'></Title>  
    </div>
    <div class="mb-3">
        <label for="subject" class="form-label fw-bolder">Subject's name</label>
        <input type="text" class="form-control input shadow mb-3 p-3 mb-0 bg-white rounded" id="subject" aria-describedby="basic-addon1" v-model="subjectGet" @keyup.enter="showBooks">
    </div>
      <v-btn class="ma-2" color="primary" elevation="20" rounded dark type="submit" @click="showBooks">
         Search<v-icon dark right> mdi-magnify </v-icon>
      </v-btn>
      <Loader />
  </v-container>
</template>

<script>
import Title from "@/components/Title";
import Loader from "@/components/Loader";

export default {
  name: "SubjectForm",
    components: {
    Title,
    Loader
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    subjectGet: {
      get() {
        return this.$store.state.subject;
      },
      set(value) {
        this.$store.commit("LOAD_SUBJECT", value);
      }
    },
  },
  methods: {
    showBooks: function () {
      if (this.$store.state.subject ) {      
        this.$store.state.loading=true;
        this.$store.state.nameSubject= this.$store.state.subject;
        this.$store.dispatch("GET_SUBJECT");
        this.show= true;
        return this.subjectGet='';
      }
      else {
        alert('Enter an subject, please.');
      }
    }
  }
}
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>