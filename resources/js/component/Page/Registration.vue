<template>
    <body>
        <div class="container">
            <form class="form" id="login">
                <h1 class="form__title" style="text-decoration: none; color: white;">Register</h1>
                <div class="form__input-group">
                    <input type="text" class="form__input" autofocus placeholder="Username">
                    <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input type="password" class="form__input" autofocus placeholder="Password">
                    <div class="form__input-error-message"></div>
                </div>
                <button class="btn btn-primary" type="submit">Register</button>

                <p class="mt-3" style="text-decoration: none; color: white;">Have an account? <a href="/login" @click="redirectToLogin" style="text-decoration: none; color: white;">Login</a></p>
            </form>
        </div>
    </body>
</template>

<script>
export default {
    methods: {
        redirectToLogin() {
            this.$router.push('/login');
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
        border: 1px solid #dddddd;
        outline: none;
        background: #eeeeee;
        transition: background 0.2s, border-color 0.2s;
    }

    .form__input:focus {
        border-color: var(--color-primary);
        background: #ffffff;
    }

    .form__input-error-message {
        margin-top: 0.5rem;
        font-size: 0.85rem;
        color: var(--color-error);
    }

    .form__button {
        width: 100%;
        padding: 1rem 2rem;
        font-weight: bold;
        font-size: 1.1rem;
        color: #ffffff;
        border: none;
        border-radius: var(--border-radius);
        outline: none;
        cursor: pointer;
        background: var(--color-primary);
    }

    .form__button:hover {
        background: var(--color-primary-dark);
    }

    .form__button:active {
        transform: scale(0.98);
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
