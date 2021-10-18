<template>
<!-- componente para mostrar la cantidad de libros obtenida de la búsqueda por autor o tema  -->

  <div class="Title">
    <div>
      <h6 class="fs-2 sm text-white bg-success p-2">       
        {{ countBooks != 0 ? countBooks : "" }} books {{ msgString }} {{ msgVar.toUpperCase() }}
      </h6> 
    </div>    
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "Title",
  props: {
    msgString: String,
    msgVar: String
  },
  computed: {
    ...mapState(["author"]),
    ...mapGetters(["countBooks"]),
  },
};
</script>

