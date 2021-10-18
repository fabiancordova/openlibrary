<template>
<!-- componente para renderizar la list de libros guardada en el arreglo  -->
  <div class="container card-grid">
    <book-item v-for="(book) in books" :key="book.index"  :book="book">
    </book-item>
  </div>
</template>

<script>
import BookItem from "@/components/BookItem.vue";
import { mapState } from "vuex";

export default {
  name: "BookList",
  components: {
    BookItem,
  },
  computed: {
    ...mapState(["books"]),
  },
};
</script>