<template>
      <form @submit.prevent="login()">
        <div class="form-floating">
          <input v-model="user" type="text" class="form-control" placeholder="ID">
          <label for="floatingInput">ID</label>
        </div>
        <div class="form-floating">
          <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" variant="success" type="submit">Sign in</button>
      </form>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      loginSuccess: false,
      loginError: false,
      user: '',
      password: '',
      error: false
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('login', {
          userName: this.userName,
          password: this.password
        })
        await this.$store.push({ name: 'AboutView' })
      } catch (err) {
        this.loginError = true
        this.error = true
        throw new Error(err)
      }
    }
  }
}
</script>
