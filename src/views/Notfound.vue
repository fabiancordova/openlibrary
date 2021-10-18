<template>
<!-- componente que informa que la no se encontró la página  -->
  <div id="not-found">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="error-template ml-5">
              <h1>
                ¡Upps!
              </h1>
              <h2>
                Page not found
              </h2>
              <div class="error-details ml-5">
                Sorry, this page cannot be found
              </div>
              <div class="text-center mt-2 p-2">
                <router-link to="/"> 
                    <v-btn color="error" elevation="19" rounded dark>
                        <v-icon dark left> mdi-arrow-left </v-icon>
                        BACK
                    </v-btn>
                </router-link>  
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
 </style>
© 2021 GitHub, Inc.
Terms