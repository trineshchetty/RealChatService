<template>
      <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 text-xs-center mt-5>
        <h1>Welcome to Real Chat</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <blockquote class="blockquote text-xs-center">
          Your Personal Real Estate Advisor <br>
          Powered By Artificial Intelligence
        </blockquote>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3 class="text-xs-center" mt-5>
        <v-btn color="primary" to="/signup">Sign Up</v-btn>
        <v-btn to="/signin">Sign In</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
