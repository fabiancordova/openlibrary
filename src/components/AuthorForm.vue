<template>
<!-- componente pedimos al usuario que introduzca el nombre del autor y
  se llama al componente BookItem para listar los libros  -->
  <v-container class="AuthorForm">
    <div v-if="show">
      <Title msgString="published by the writer" :msgVar='$store.state.nameAuthor'></Title>  
    </div>

    <div class="mb-3">
        <label for="author" class="form-label fw-bolder">Author's name</label>
        <input type="text" class="form-control input shadow mb-3 p-3 mb-0 bg-white rounded" id="author" aria-describedby="basic-addon1" v-model="authorGet" @keyup.enter="showBooks">
    </div>      
      <v-btn class="ma-2" color="primary" elevation="19" rounded dark type="submit" v-on:click="showBooks">
        Search <v-icon dark right> mdi-magnify </v-icon>
      </v-btn>
      <Loader />
  </v-container> 
</template>

<script>
import Title from "@/components/Title";
import Loader from "@/components/Loader";

export default {
  name: "AuthorForm",
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
    authorGet: {
      get() {
        return this.$store.state.author;
      },
      set(value) {
        this.$store.commit("LOAD_AUTHOR", value);
      }
    }
  },
  methods: {
    showBooks: function () {
      if (this.$store.state.author ) {
        this.$store.state.loading=true;     
        this.$store.state.nameAuthor= this.$store.state.author;
        this.$store.dispatch("GET_BOOKS");
        this.show= true;
        return this.authorGet='';
      }
      else {
        alert('Enter an author, please.');
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