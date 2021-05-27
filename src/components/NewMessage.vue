<template>
  <v-flex sm8 offset-sm2>
    <v-toolbar dark>
      <v-toolbar-title>New Messages</v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="messageBody"
                label="Message"
                required
              ></v-text-field>
              <v-btn color="success" class="mr-4" @click="submit">
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      messageBody: "",
    };
  },
  methods: {
    async submit() {
      try {
        let msg = (
          await axios.post("http://localhost:3000/messages", {
            message: this.messageBody,
          })
        ).data;
        this.$root.$emit("newMessage", msg.message);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
