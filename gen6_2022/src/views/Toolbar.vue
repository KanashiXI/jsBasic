<!--<template>
    <div>
        <v-card class="overflow-hidden">
            <v-app-bar
                absolute
                color="#fcb69f"
                dark
                shrink-on-scroll
                src="https://picsum.photos/1920/1080?random"
                scroll-target="#scrolling-techniques-2"
            >
                <template v-slot:img="{ props }">
                <v-img
                    v-bind="props"
                    gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
                ></v-img>
                </template>

                <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

                <v-app-bar-title>All's Profile</v-app-bar-title>

                <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                >
                <v-list
                    nav
                    dense
                >
                    <v-list-item-group
                    v-model="group"
                    active-class="deep-purple--text text--accent-4"
                    >
                    <v-list-item>
                        <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title><router-link to="/">Home</router-link></v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title><router-link to="/about">Account</router-link></v-list-item-title>
                    </v-list-item>
                    </v-list-item-group>
                </v-list>
                </v-navigation-drawer>

                <v-spacer></v-spacer>

                <v-btn icon>
                <v-icon>mdi-heart</v-icon>
                </v-btn>

            </v-app-bar>
            <v-main>
                <router-view/>
            </v-main>
            <v-sheet
                id="scrolling-techniques-2"
                class="overflow-y-auto"
                max-height="100vh"
            >
                <v-container style="height: 100%;"></v-container>
            </v-sheet>
        </v-card>
    </div>
</template>
-->
<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    reveal: false,
    drawer: false,
    group: null
  })
}

</script>
