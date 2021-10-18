<template>
<!-- componente barra de navegación  -->
  <div>
    <v-app-bar  color="primary lighten-1"  dense dark >
      <v-app-bar-nav-icon @click="drawer= !drawer"></v-app-bar-nav-icon>
      <v-spacer>
        <v-toolbar-title align="center" justify="space-around">OPEN LIBRARY</v-toolbar-title>
      </v-spacer>     
      <router-link to="/"> 
        <v-btn color="info" elevation="19" rounded dark small>
          LOGOUT
          </v-btn>
      </router-link> 
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="../assets/OpenLibrary.png" alt="OpenLibrary logo"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>OpenLibrary</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon color="blue darken-2">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link :to="item.ruta" class="nav-link" aria-current="page">{{ item.title }}</router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavBar",
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Author', icon: 'mdi-feather', ruta: '/Author' },
          { title: 'Subject', icon: 'mdi-script-outline', ruta: '/Subject' },
        ],
      }
    },
};
</script>

