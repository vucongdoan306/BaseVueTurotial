<template>
  <div id="default-layout">
    <div>
      <v-toolbar
        dark
        prominent
        image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Vuetify</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss"></style>
