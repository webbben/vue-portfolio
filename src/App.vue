<template>
  <v-app>

    <v-navigation-drawer 
      app
      temporary
      v-model="showNavDrawer">
      <v-list>
        <v-list-item 
        link 
        v-for="item in menuItems" 
        :key="item.text"
        router
        :to="item.link">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{item.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark>
      <v-app-bar-nav-icon 
        @click.stop="showNavDrawer = !showNavDrawer"
        class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Ben's Portfolio</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text 
          v-for="item in menuItems" 
          :key="item.text"
          router
          :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.text}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        showNavDrawer: false,
        menuItems: [
          {text: "Resume", icon: 'mdi-book-account', link: '/resume' },
          {text: "Projects", icon: 'mdi-hammer', link: '/projects'},
          {text: "About Me", icon: 'mdi-information', link: '/aboutme'}
        ]
      }
    }
  }
</script>

