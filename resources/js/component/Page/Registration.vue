<template>
    <body>
        <div class="container">
            <form @submit.prevent = handleRegister class="form" id="login">
                <h1 class="form__title" style="text-decoration: none; color: white;">Register</h1>
                <div class="form__input-group">
                    <input v-model="name" type="text" class="form__input" autofocus placeholder="Name">
                    <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input v-model="email" type="email" class="form__input" autofocus placeholder="Email">
                    <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input v-model="password" type="password" class="form__input" autofocus placeholder="Password">
                    <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input v-model="password_confirmation" type="password" class="form__input" autofocus placeholder="Confirm Password">
                    <div class="form__input-error-message"></div>
                </div>
                <button class="btn btn-primary" type="submit">Register</button>

                <p class="mt-3" style="text-decoration: none; color: white;">Have an account? <a href="/" @click="redirectToLogin" style="text-decoration: none; color: white;">Login</a></p>
            </form>
        </div>
    </body>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        };
    },
    methods: {
        handleRegister() {
            axios.post('http://127.0.0.1:8000/api/auth/register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            })
            .then(response => {
                console.log(response);
                this.$router.push('/')
            })
            .catch(error => {
                console.error(error);
            });
        },
        redirectToLogin() {
            this.$router.push('/');
        }
    }
};
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

    .form__input {
        display: block;
        width: 100%;
        padding: 0.75rem;
        box-sizing: border-box;
        border-radius: var(--border-radius);
        border: 1px solid #3A3B3C;
        outline: none;
        border-radius: 20px;
        background: #3A3B3C;
        color:white;
    }

    .form__input:focus {
        background: #3A3B3C;
        color:white;
    }

    .form__input-error-message {
        margin-top: 0.5rem;
        font-size: 0.85rem;
        color: var(--color-error);
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
