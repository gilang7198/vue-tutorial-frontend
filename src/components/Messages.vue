<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Messages</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-item
          v-for="(items, index) in this.$store.state.messages"
          :key="items"
          :to="'detailmessage/' + index"
        >
          <v-list-item-content>
            <v-list-item-title v-text="items.text"></v-list-item-title>
            <v-list-item-subtitle v-text="items.user"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  async created() {
    this.$store.dispatch("getMessages");
  },
};
</script>
