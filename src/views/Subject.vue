<template>
  <div class="Subject">
    <subject-form></subject-form>
    <book-list></book-list>
  </div>
</template>

<script>
import BookList from "@/components/BookList";
import SubjectForm from "@/components/SubjectForm";
import store  from '../store'

export default {
  name: "Subject",
  components: {
    BookList,
    SubjectForm,
  },
  mounted() {
    this.getReset();  
  },
  methods: {
     getReset() {
       store.state.books= [];
     }
  }
}
</script>

<style>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1em;
}

#search{
    width: 300px;
    height: 150px;
    margin: auto;
    margin-top: 20px;
    padding: 15px;
}

</style>
