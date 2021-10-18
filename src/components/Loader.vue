<template>
  <div class="text-center"  v-if="$store.state.loading">
    <span>LOADING...</span>
    <v-progress-circular
      :size="50"
      indeterminate
      color="primary"
    ></v-progress-circular>

    <v-progress-circular
      :size="50"
      indeterminate
      color="red"
    ></v-progress-circular>

    <v-progress-circular
      :size="50"
      indeterminate
      color="purple"
    ></v-progress-circular>

    <v-progress-circular
      :size="50"
      indeterminate
      color="green"
    ></v-progress-circular>

    <v-progress-circular
      :size="50"
      indeterminate
      color="amber"
    ></v-progress-circular>
  </div>
</template>


<script>
export default {
  name: "Loader",
 }
</script>