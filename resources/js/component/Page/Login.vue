<template>
    <body>
        <div class="container">
            <form @submit.prevent="handleLogin" class="form" id="login">
                <h1 class="form__title" style="text-decoration: none; color: white;">Login</h1>
                <div class="form__input-group">
                    <input v-model="email" style=" background: #3A3B3C; border: 1px solid #3A3B3C; border-radius: 20px" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">

                </div>
                <div class="form__input-group">
                    <input v-model="password" style=" background: #3A3B3C;  border: 1px solid #3A3B3C; border-radius: 20px;" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <button class="btn btn-primary" type="submit">Login</button>

                <p class="mt-3" style="text-decoration: none; color: white;">Have an account? <a href="/register" @click="redirectToregister" style="text-decoration: none; color: white;">Register</a></p>
            </form>
        </div>
    </body>
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
            axios.post('http://127.0.0.1:8000/api/auth/login', {
                email: this.email,
                password: this.password
            })
            .then(response => {
                    this.$router.push('/home')
            })
            .catch(error => {
                console.log(error);
            });
        },
        redirectToregister() {
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
.btn{
    width: 100%;
    color: white;
}
    body {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        background-size: cover;
    }

    .container {
        width: 100%;
        max-width: 400px;
        margin: 1rem;
        padding: 2rem;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.7);
        border-radius: 20px;
        margin-top: 9%;
    }

    .container,
    .form__input,
    .form__button {
        font: 500 1rem 'Quicksand', sans-serif;
        border-style:solid;
        border-color: #dddddd;
    }

    .form > *:first-child {
        margin-top: 0;
    }

    .form > *:last-child {
        margin-bottom: 0;
    }

    .form__title {
        margin-bottom: 2rem;
        text-align: center;
        font-weight: bold;
    }

    .form__input-group {
        margin-bottom: 1rem;
    }


    @media screen and (max-width: 480px) {

        .container {
            padding: 1rem;
            margin-top:1rem;
        }
        body{
            padding: 1rem;
            margin-top: 7rem;
        }

        .form__title {
            margin-bottom: 1.5rem;
        }

        .form__button {
            font-size: 1rem;
        }
    }
</style>

