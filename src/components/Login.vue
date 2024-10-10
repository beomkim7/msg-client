<template>
    <main class="form-signin w-100 auto-100">
        <div v-if="loginError">
            <h5>
                <span class="badge text-bg-danger">
                    아이디와 비밀번호를 입력해주세요.
                </span>
            </h5>
            <form @submit.prevent="login()">
                <div class="form-floating">
                    <input v-model="user" type="text" class="form-control" placeholder="ID">
                    <label for="floatinInput">ID</label>
                </div>

                <div class="form-floating">
                    <input v-model="password" type="text" class="form-control" placeholder="Password">
                    <label for="flaotingPassword">Password</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" variant="success" type="submit">Sing in</button>
            </form>
        </div>
        <div v-else>
            <h1 class="h3 mb-3 fw-normal">
                <span class="badge text-bg-primary">
                    로그인해주세요
                </span>
            </h1>
            <h5>로그인 하지 않았습니다</h5>
            <form @submit.prevent="login()">
                <div class="form-floating">
                    <input v-model="user" type="text" class="form-control" placeholder="ID">
                    <label for="floatingInput">ID</label>
                </div>

                <div class="form-floating">
                    <input v-model="password" type="text" class="form-control" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" variant="success" type="submit">Sign in</button>
            </form>
        </div>
    </main>
</template>

<script>

export default {
    name:'LoginViue',
    data(){
        return{
        loginSuccess:false,
        loginError:false,
        user:'',
        password:'',
        error:false
        }
    },
    method:{
        async login(){
            try{
                await this.$store.dispatch('login',{
                    user:this.user,
                    password:this.password
                })
            }catch(err){
                this.loginError=true
                this.error=true
                throw new Error(err)
            }
        }
    }
}
</script>

<style scoped>

</style>