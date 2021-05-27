<template>
  <v-app>
    <v-app-bar app>
      <v-btn plain to="/">Messages</v-btn>
      <v-btn plain to="/newmessage">New Messages</v-btn>
      <v-spacer></v-spacer>
      <v-btn plain to="/register">Register</v-btn>
      <v-btn plain>Login</v-btn>
    </v-app-bar>
    <v-main>
      <br />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>
