<template>
    <form @submit.prevent="handleLogin">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email:'',
            password:''
        };
    },
    methods: {
        handleLogin() {
            axios.post('/api/auth/login', {
                email: this.email,
                password: this.password
            })
            .then(response => {
                console.log(response.data);
                if(response.data.status == 200){
                    this.$router.push("/")
                }
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}
</script>

<style lang="scss" scoped></style>
