<template>
  <v-app>
    <NavBar/>
    <transition name="fade" mode="out-in">        
        <router-view />
    </transition>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
export default {
  name: 'App',

  components: {
    NavBar,
    Footer
  },
};
</script>

<style>
/* efectos de transición */
.fade-enter-active,
  .fade-leave-active {
    transition: opacity 1.5s
}
.fade-enter,
  .fade-leave-to
    /* .fade-leave-active in <2.1.8 */
  {
    opacity: 0
}
/* fin efectos de transición */

</style>