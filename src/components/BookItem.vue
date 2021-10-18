<template>
<!-- componente listar los libros por autor o tema  -->
<v-container>
  <v-layout row wrap>
    <v-flex xs12 sm8>
      <v-card elevation="24">
        <v-img
                       v-if="!book.cover"
              src="https://books.google.es/googlebooks/images/no_cover_thumb.gif"
              class="img-fluid rounded-start pa-xs-2"
              alt="smiley face"
              width="100px"
              height="140px"
          />   

          <v-img v-else :src="'https://covers.openlibrary.org/b/id/'+ book.cover +'-S.jpg'" class="pa-xs-2" width="100px" height="140px" alt="Real Image" />

        <v-card-title>
          <h6>{{ book.title }}</h6>
        </v-card-title>

        <v-card-text>
        <p class="card-text"><small class="text-muted">{{ book.author }}</small></p>
        </v-card-text>

        <v-card-actions>
        <p> <a :href="'https://openlibrary.org/books/' + book.key" target="_blank">
        <v-btn class="ma-2" color="primary" elevation="9"  rounded dark>Read More</v-btn>
        </a> </p>     
        </v-card-actions>

      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  name: "BookItem",
  props: ["book"],
}
</script>
