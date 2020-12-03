<template>
  <div>
    <h1>Login Route</h1>
    <form class="custom-form" v-on:submit="onSubmit"> <!-- submit the method I created -->
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" placeholder="Username">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-secondary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import * as auth from '../../services/AuthService'

export default {
  name: "login", //component
  methods: {
    onSubmit: function(event) { //takes events of the form
      event.preventDefault(); //stop the form from submitting its default method
      auth.login(); //calling login method from Auth
      this.$router.push({ name:'home' }); //after login route back to home  that is defined in route.js
    }
  }
}
</script>

<style scoped>

</style>